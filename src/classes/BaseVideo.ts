import { PlaylistCompact, VideoCompact, Channel, Base, BaseAttributes, Thumbnails } from ".";
import { YoutubeRawData } from "../common";
import { I_END_POINT } from "../constants";

/** @hidden */
export interface BaseVideoAttributes extends BaseAttributes {
	title: string;
	thumbnails: Thumbnails;
	description: string;
	channel: Channel;
	uploadDate: string;
	viewCount: number | null;
	likeCount: number | null;
	dislikeCount: number | null;
	isLiveContent: boolean;
	tags: string[];
	upNext: VideoCompact | PlaylistCompact;
	related: (VideoCompact | PlaylistCompact)[];
}

/** Represents a Video  */
export default class BaseVideo extends Base implements BaseVideoAttributes {
	/** The title of this video */
	title!: string;
	/** Thumbnails of the video with different sizes */
	thumbnails!: Thumbnails;
	/** The description of this video */
	description!: string;
	/** The channel that uploaded this video */
	channel!: Channel;
	/** The date this video is uploaded at */
	uploadDate!: string;
	/** How many view does this video have, null if the view count is hidden */
	viewCount!: number | null;
	/** How many like does this video have, null if the like count hidden */
	likeCount!: number | null;
	/** How many dislike does this video have, null if the dislike count is hidden */
	dislikeCount!: number | null;
	/** Whether this video is a live content or not */
	isLiveContent!: boolean;
	/** The tags of this video */
	tags!: string[];
	/** Next video / playlist recommended by Youtube */
	upNext!: VideoCompact | PlaylistCompact;
	/** Videos / playlists related to this video  */
	related!: (VideoCompact | PlaylistCompact)[];

	_relatedContinuation!: string;

	/** @hidden */
	constructor(video: Partial<BaseVideoAttributes> = {}) {
		super();
		Object.assign(this, video);
	}

	/**
	 * Load this instance with raw data from Youtube
	 *
	 * @hidden
	 */
	load(data: YoutubeRawData): BaseVideo {
		const videoInfo = BaseVideo.parseRawData(data);

		// Basic information
		this.id = videoInfo.videoDetails.videoId;
		this.title = videoInfo.videoDetails.title;
		this.uploadDate = videoInfo.dateText.simpleText;
		this.viewCount = +videoInfo.videoDetails.viewCount || null;
		this.isLiveContent = videoInfo.videoDetails.isLiveContent;
		this.thumbnails = new Thumbnails().load(videoInfo.videoDetails.thumbnail.thumbnails);

		// Channel
		const { title, thumbnail } = videoInfo.owner.videoOwnerRenderer;
		this.channel = new Channel({
			client: this.client,
			id: title.runs[0].navigationEndpoint.browseEndpoint.browseId,
			name: title.runs[0].text,
			thumbnails: new Thumbnails().load(thumbnail.thumbnails),
			url: `https://www.youtube.com/channel/${title.runs[0].navigationEndpoint.browseEndpoint.browseId}`,
		});

		// Like Count and Dislike Count
		const topLevelButtons = videoInfo.videoActions.menuRenderer.topLevelButtons;
		this.likeCount =
			+topLevelButtons[0].toggleButtonRenderer.defaultText.accessibility?.accessibilityData.label.replace(
				/[^0-9]/g,
				""
			) || null;
		this.dislikeCount =
			+topLevelButtons[1].toggleButtonRenderer.defaultText.accessibility?.accessibilityData.label.replace(
				/[^0-9]/g,
				""
			) || null;

		// Tags and description
		this.tags =
			videoInfo.superTitleLink?.runs?.reduce((tags: string[], t: Record<string, string>) => {
				if (t.text.trim()) tags.push(t.text.trim());
				return tags;
			}, []) || [];
		this.description =
			videoInfo.description?.runs.map((d: Record<string, string>) => d.text).join("") || "";

		// Up Next and related videos
		this.related = [];
		const secondaryContents =
			data[3].response.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults
				.results;
		for (const secondaryContent of secondaryContents) {
			if ("compactAutoplayRenderer" in secondaryContent) {
				const content = secondaryContent.compactAutoplayRenderer.contents[0];
				if ("compactVideoRenderer" in content) {
					this.upNext = new VideoCompact({ client: this.client }).load(
						content.compactVideoRenderer
					);
				} else if ("compactRadioRenderer" in content) {
					this.upNext = new PlaylistCompact({ client: this.client }).load(
						content.compactRadioRenderer
					);
				}
			} else if ("compactVideoRenderer" in secondaryContent) {
				this.related.push(
					new VideoCompact({ client: this.client }).load(
						secondaryContent.compactVideoRenderer
					)
				);
			} else if ("compactRadioRenderer" in secondaryContent) {
				this.related.push(
					new PlaylistCompact({ client: this.client }).load(
						secondaryContent.compactRadioRenderer
					)
				);
			}
		}

		// Related continuation
		this._relatedContinuation = BaseVideo.getRelatedContinuation(secondaryContents);

		return this;
	}

	/** Load next related videos / playlists */
	async nextRelated(count = 1): Promise<(VideoCompact | PlaylistCompact)[]> {
		const newRelated: (VideoCompact | PlaylistCompact)[] = [];
		for (let i = 0; i < count || count == 0; i++) {
			if (this._relatedContinuation === undefined) break;

			const response = await this.client.http.post(`${I_END_POINT}/next`, {
				data: { continuation: this._relatedContinuation },
			});

			const secondaryContents =
				response.data.onResponseReceivedEndpoints[0].appendContinuationItemsAction
					.continuationItems;

			for (const secondaryContent of secondaryContents) {
				if ("compactVideoRenderer" in secondaryContent) {
					this.related.push(
						new VideoCompact({ client: this.client }).load(
							secondaryContent.compactVideoRenderer
						)
					);
				} else if ("compactRadioRenderer" in secondaryContent) {
					this.related.push(
						new PlaylistCompact({ client: this.client }).load(
							secondaryContent.compactRadioRenderer
						)
					);
				}
			}

			this._relatedContinuation = BaseVideo.getRelatedContinuation(secondaryContents);
		}

		this.related.push(...newRelated);
		return newRelated;
	}

	/** @hidden */
	static parseRawData(data: YoutubeRawData): YoutubeRawData {
		const contents =
			data[3].response.contents.twoColumnWatchNextResults.results.results.contents;

		const primaryInfo = contents.find((c: YoutubeRawData) => "videoPrimaryInfoRenderer" in c)
			.videoPrimaryInfoRenderer;
		const secondaryInfo = contents.find(
			(c: YoutubeRawData) => "videoSecondaryInfoRenderer" in c
		).videoSecondaryInfoRenderer;
		const videoDetails = data[2].playerResponse.videoDetails;
		return { ...secondaryInfo, ...primaryInfo, videoDetails };
	}

	private static getRelatedContinuation(secondaryContents: YoutubeRawData) {
		const lastSecondaryContent = secondaryContents[secondaryContents.length - 1];
		return "continuationItemRenderer" in lastSecondaryContent
			? lastSecondaryContent.continuationItemRenderer.continuationEndpoint.continuationCommand
					.token
			: undefined;
	}
}
