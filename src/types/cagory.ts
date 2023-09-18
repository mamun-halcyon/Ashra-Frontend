export interface ICategoryData {
  title: string;
  subLinks: { title: string; slug: string }[];
  isOpen?: boolean;
}
