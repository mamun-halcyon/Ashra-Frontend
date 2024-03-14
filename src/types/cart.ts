export interface ICartItem {
  product_id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  attribute_id?: number | null;
  attribute_name?: string;
  regular_price: number;
  product_attribute?: any;
}
