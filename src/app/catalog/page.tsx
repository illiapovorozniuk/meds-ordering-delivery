import React from "react";

//TEMPORARY FAKE DATA
import { catalogItems } from "../../../FAKE DATA/catalogItems";
import CatalogItem from "./CatalogItem";

const page = () => {
  return (
    <div>
      {catalogItems.map((item) => (
        <CatalogItem img={item.img} title={item.title} />
      ))}
    </div>
  );
};

export default page;
