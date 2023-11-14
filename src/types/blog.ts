export type IBlog = {
  id?: number | string;
  title: string;
  description?: string;
  image?: File | null;
  is_visible: boolean;
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  meta_image?: File | null;
  slug: string;
  created_at: string;
  updated_at?: string;
};

export interface IResponseBlog {
  data: {
    count: number;
    rows: IBlog[];
  };
}
