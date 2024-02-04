import { IBanner } from "./banner";
import { ICategoryData } from "./category";
import { IProduct } from "./product";
import { ISetting } from "./setting";
import { IVideo } from "./video";

export interface IHomePage {
  id: number;
  meta_title: string;
  meta_description: string;
  mobile_number: string;
  office_time: string;
  special_product_link: string;
  special_product_photo: string;
  category_one: string;
  category_two: string;
  category_three: string;
  created_at: string;
  updated_at: string;
}

export interface HomeApiResponse {
  homePage: IHomePage;
  category: ICategoryData[];
  banner: IBanner[];
  keyPoint: any[]; // Update this type as needed
  video: IVideo[];
  topSale: IProduct[];
  newArrival: IProduct[];
  featureProduct: IProduct[];
  setting: ISetting;
}
