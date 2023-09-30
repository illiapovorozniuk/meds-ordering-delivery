import { useState } from "react";
import { v4 } from "uuid";
import { ICatalogContent } from "@/types/catalogContent";
import CatalogLink from "./CatalogLink";
import styles from "./Catalog.module.scss";

//TEMPORARY FAKE DATA
import { catalogItems } from "../../../FAKE DATA/catalogItems";

const Catalog = () => {
  const [selectedContent, setSelectedContent] = useState<ICatalogContent[]>(
    catalogItems[0].content
  );

  return (
    <div className={styles.catalog}>
      <div className={styles.links}>
        {catalogItems.map((item) => (
          <CatalogLink
            img={item.img}
            title={item.title}
            content={item.content}
            setSelectedContent={setSelectedContent}
            key={v4()}
          />
        ))}
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
import CatalogItem from "./CatalogLink";
import CatalogContentItem from "./CatalogContentItem";
