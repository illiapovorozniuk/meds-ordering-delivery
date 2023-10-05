"use client";
import { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import NavigationButton from "../ui/navigationButton/NavigationButton";
import Modal from "../ui/modal/Modal";
import Sidebar from "../ui/sidebar/Sidebar"
import Catalog from "../catalog/Catalog";
import Location from "../location/Location";
import Sides from "../../utils/enums"

const Header = () => {
  const [isModalCatalogOpen, setIsModuleCatalogOpen] = useState<boolean>(false);
  const changeIsModalCatalog = () => {
    setIsModuleCatalogOpen(!isModalCatalogOpen);
  };

  const [isSidebarLocationOpen, setIsSidebarLocationOpen] = useState<boolean>(false);
  const changeIsSidebarLocation = ()=>{
    setIsSidebarLocationOpen(!isSidebarLocationOpen);
  }



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
        <NavigationButton onClick={changeIsSidebarLocation}>
          Location
        </NavigationButton>
        <Sidebar isOpen={isSidebarLocationOpen} onClose={changeIsSidebarLocation} side={Sides.Left}>
          <Location />
        </Sidebar>
      </div>
    </header>
  );
};

export default Header;
