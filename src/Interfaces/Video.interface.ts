export interface IVideo {
    id: number;
    title: string;
    publisher: string;
    viewCount: number;
    likeCount?: number;
    publishDate: string;
    category: string;
    imageURL: string;
    videoPath: string;
    publisherData?: {
        channelName: string;
        avatar?: string;
    }
};