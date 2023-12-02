export interface IVideo {
  id: number;
  title: string;
  url: string;
  is_visible: boolean;
  created_at?: string;
  updated_at?: string;
}
interface VideoData {
  count: number;
  rows: IVideo[];
}

export interface IVideoApiResponse {
  data: VideoData;
}
