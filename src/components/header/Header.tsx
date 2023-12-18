"use client";
import { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import NavigationButton from "../ui/navigationButton/NavigationButton";
import Modal from "../ui/modal/Modal";
import Sidebar from "../ui/sidebar/Sidebar";
import Catalog from "../catalog/Catalog";
import Location from "../location/Location";
import Sides from "../../utils/enums";
import SignIn from "../login/SignIn";

const Header = () => {
  const [isModalCatalogOpen, setIsModuleCatalogOpen] = useState<boolean>(false);
  const changeIsModalCatalog = () => {
    setIsModuleCatalogOpen(!isModalCatalogOpen);
  };

  const [isSidebarLocationOpen, setIsSidebarLocationOpen] =
    useState<boolean>(false);
  function handleLocationOpen() {
    setIsSidebarLocationOpen((isOpen) => !isOpen);
  }


  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
  const changeIsModalLoginOpe = () => {
    setIsModalLoginOpen(!isModalLoginOpen);
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
        <NavigationButton onClick={handleLocationOpen}>
          Location
        </NavigationButton>

        {isSidebarLocationOpen ? (
          <Sidebar
            onClose={handleLocationOpen}
            side={Sides.Left}
            title="Select your current city"
          >
            <Location />
          </Sidebar>
        ) : null}
        
        {!!localStorage.getItem("user") ? (
          <NavigationButton
            onClick={() => {
              localStorage.removeItem("user");
              location.reload();
            }}
          >
            Sign out
          </NavigationButton>
        ) : (
          <NavigationButton onClick={changeIsModalLoginOpe}>
            Sign in
          </NavigationButton>
        )}

        <Modal isOpen={isModalLoginOpen} onClose={changeIsModalLoginOpe}>
          <SignIn />
        </Modal>
      </div>
    </header>
  );
};

export default Header;
