import { ICatalogContent } from "@/types/catalogContent";
import { FC } from "react";
import Link from "next/link";
import styles from "./CatalogContentItem.module.scss";
import { link } from "fs";

const CatalogContentItem: FC<ICatalogContent> = ({
  title,
  titleLink,
  subCategories,
}) => {
  return (
    <div className={styles.contentItem}>
      <h3>
        <Link href={titleLink}>{title}</Link>
      </h3>
      <ul>
        {subCategories.map((categ) => (
          <li>
            <Link href={categ.subLink}>{categ.subTitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogContentItem;
