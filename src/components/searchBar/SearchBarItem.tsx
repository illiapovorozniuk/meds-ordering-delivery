import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import {
  ISearchItem,
  ISearchItemWithLink,
  ISearchItemWithImage,
} from "@/types/searchBarItem";

interface SearchBarItemProps {
  item: ISearchItem | ISearchItemWithLink | ISearchItemWithImage;
}

const SearchBarItem: React.FC<SearchBarItemProps> = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseEnter = () => {
    setIsSelected(true);
  };

  const handleMouseLeave = () => {
    setIsSelected(false);
  };

  if ("image" in item) {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${styles.searchBarItem} ${
          isSelected ? styles.selected : ""
        }`}
      >
        <img src={item.image} alt={item.text} />
        <div className={styles.searchBarItemText}>
          <h3>{item.text}</h3>
          <p>{item.description}</p>
          <a href={item.link}>Learn More</a>
        </div>
      </div>
    );
  }

  if ("description" in item) {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${styles.searchBarItem} ${
          isSelected ? styles.selected : ""
        }`}
      >
        <div className={styles.searchBarItemText}>
          <h3>{item.text}</h3>
          <p>{item.description}</p>
          <a href={item.link}>Learn More</a>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.searchBarItem}
    >
      <div className={styles.searchBarItemText}>
        <h3>{item.text}</h3>
      </div>
    </div>
  );
};

export default SearchBarItem;
