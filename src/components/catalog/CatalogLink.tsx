import { FC } from "react";
import { ICatalogItem } from "../../types/catalogItem";
import { ICatalogContent } from "../../types/catalogContent";
import styles from "./CatalogLink.module.scss";

interface CatalogLinkProps extends ICatalogItem {
  setSelectedContent: (content: ICatalogContent[]) => void;
}
const CatalogItem: FC<CatalogLinkProps> = ({
  img,
  title,
  content,
  setSelectedContent,
}) => {
  return (
    <div
      className={styles.catItem}
      onMouseOver={() => setSelectedContent(content)}
    >
      <img src={img} alt="" />

      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default CatalogItem;
