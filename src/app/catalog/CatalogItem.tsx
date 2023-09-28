import { FC } from "react";
import { ICatalogItem } from "@/types/catalogItem";

const CatalogItem: FC<ICatalogItem> = ({ img, title }) => {
  return (
    <div>
      <img src={img} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default CatalogItem;
