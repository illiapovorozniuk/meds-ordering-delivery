import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import NavigationLink from "../common/navigationLink/NavigationLink";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>
          <Link href="//">Pills Delivery</Link>
        </h1>
        <NavigationLink href="/catalog">Catalog</NavigationLink>
      </div>
    </header>
  );
};

export default Header;
