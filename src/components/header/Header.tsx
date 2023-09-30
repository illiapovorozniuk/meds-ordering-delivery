"use client";
import { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import NavigationButton from "../ui/navigationButton/NavigationButton";
import Modal from "../ui/modal/Modal";
import Catalog from "../catalog/Catalog";
const Header = () => {
  const [isModalCatalogOpen, setIsModuleCatalogOpen] = useState<boolean>(false);
  const changeIsModalCatalog = () => {
    setIsModuleCatalogOpen(!isModalCatalogOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>
          <Link href="//">Pills Delivery</Link>
        </h1>
        <NavigationButton onClick={changeIsModalCatalog}>
          Catalog
        </NavigationButton>
        <Modal isOpen={isModalCatalogOpen} onClose={changeIsModalCatalog}>
          <Catalog />
        </Modal>
      </div>
    </header>
  );
};

export default Header;
