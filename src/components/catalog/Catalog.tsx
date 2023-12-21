import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { ICatalogContent } from "@/types/catalogContent";
import { ICatalogItem } from "@/types/catalogItem";
import CatalogLink from "./CatalogLink";
import styles from "./Catalog.module.scss";
import CatalogContentItem from "./CatalogContentItem";
import { useGetCatalogItemsQuery } from "@/store/catalogItems/catalogItem.api";

const Catalog = () => {
  const { data, isLoading, error } = useGetCatalogItemsQuery(10);
  const [selectedContent, setSelectedContent] = useState<ICatalogContent[]>([]);

  return (
    <div className={styles.catalog}>
      <div className={styles.links}>
        {isLoading ? (
          "loading"
        ) : error ? (
          <div>{error}</div>
        ) : (
          data?.map((item: ICatalogItem) => (
            <CatalogLink
              img={item.img}
              title={item.title}
              content={item.content}
              setSelectedContent={setSelectedContent}
              key={v4()}
            />
          ))
        )}
      </div>
      <div className={styles.content}>
        {selectedContent.map((content) => (
          <CatalogContentItem
            title={content.title}
            titleLink={content.titleLink}
            subCategories={content.subCategories}
            key={v4()}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
