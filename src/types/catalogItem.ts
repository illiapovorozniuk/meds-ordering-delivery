import { ICatalogContent } from "./catalogContent";
export interface ICatalogItem {
  img: string;
  title: string;
  content: ICatalogContent[];
}
