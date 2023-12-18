import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { ICatalogContent } from "@/types/catalogContent";
import { ICatalogItem } from "@/types/catalogItem";
import CatalogLink from "./CatalogLink";
import styles from "./Catalog.module.scss";
import axios from "axios";

const Catalog = () => {
  const [catalogItems, setCatalogItems] = useState<ICatalogItem[]>([]);
  const [selectedContent, setSelectedContent] = useState<ICatalogContent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3005/catalogItems");

        setCatalogItems(response.data);
        setSelectedContent(response.data[0].content);
      } catch (error) {
        console.error("Error with fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
