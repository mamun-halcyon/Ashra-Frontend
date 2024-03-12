export type IProduct = {
  id?: number;
  title: string;
  slug: string;
  description: string;
  sort_description: string;
  image: string;
  category_slug?: string;
  quantity: number;
  regular_price: number;
  discount_price: number;
  delivery_fee?: number;
  is_visible: boolean;
  availability?: number;
  video_url?: string;
  is_sale?: boolean;
  is_feature?: boolean;
  is_new?: boolean;
  is_homepage?: boolean;
  camping_start_date?: string;
  camping_end_date?: string;
  policy: string;
  upload_by?: number;
  meta_title?: string;
  meta_description?: string;
  created_at?: string;
  updated_at?: string;
};

export type IProductResponse = {
  data: {
    count: number;
    rows: IProduct[];
  };
};

interface ProductPhoto {
  id: number;
  product_id: number;
  image: string;
  order_number: number;
  created_at: string;
  updated_at: string;
}

interface IProductAttribute {
  id: number;
  product_id: number;
  attribute_key: string;
  attribute_value: string;
  attrbute_image: string;
  created_at: string;
  updated_at: string;
}

export interface ISingleProduct {
  averageReview: number;
  product: IProduct;
  productPhotos: ProductPhoto[];
  relatedProduct: IProduct[];
  review: [];
  productAttribute?: IProductAttribute[];
}
