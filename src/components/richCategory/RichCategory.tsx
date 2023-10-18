import React from "react";
import styles from "./RichCategory.module.scss";
import { IRichCategoryData } from "@/types/richCategoryData";

interface RichCategoryProps {
  data: IRichCategoryData;
}

const RichCategory: React.FC<RichCategoryProps> = ({ data }) => {
  const { title, titleLink, img, wideCardColor } = data;
  return (
    <a className={styles.categoryContainer} href={titleLink} title={title ? title : ""}>
        {wideCardColor ? (
            <div className={styles.wideCard} style={{ backgroundColor: wideCardColor }}>
                <img src={img} alt="" />
            </div>
        ) : (
            <img src={img} alt="" />
        )}
    </a>
  );
};

export default RichCategory;