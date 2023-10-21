import { deflate } from "zlib";
import { ICity } from "../../types/city";
import { FC } from "react";
import styles from "./LocationItem.module.scss";

const LocationItem: FC<ICity> = ({ name, region }) => {
  return (
    <>
      <div className={styles.locationItem}>
        {name}/{region}
      </div>
    </>
  );
};

export default LocationItem;
