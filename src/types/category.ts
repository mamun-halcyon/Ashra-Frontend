export interface ICategoryData {
  id: number;
  title: string;
  slug: string;
  parent_category: string;
  order_id: number | null;
  image: string | null;
  is_feature: boolean;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
  isOpen?: boolean;
}
