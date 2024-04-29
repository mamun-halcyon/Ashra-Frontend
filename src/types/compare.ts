export interface ICompareItem {
  product_id: number;
  title: string;
  image: string;
  regular_price: number;
  price: number;
  quantity: number;
  description: string;
  rating: number;
  availability?: number;
  attribute?: any;
}
