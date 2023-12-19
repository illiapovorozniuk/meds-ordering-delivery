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
import RegistrationForm from "../registration/RegistrationForm";

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
  function handleSignn() {
    setIsSidebarLocationOpen((isOpen) => !isOpen);
  }
  function handleSignUp() {
    setIsModalRegisterOpen((isOpen) => !isOpen);
  }

  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
  const changeIsModalLoginOpen = () => {
    setIsModalLoginOpen(!isModalLoginOpen);
  };

  const [isModalRegisterOpen, setIsModalRegisterOpen] =
    useState<boolean>(false);

  const changeIsModalSignUpOpen = () => {
    setIsModalRegisterOpen(!isModalRegisterOpen);
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
          <div>
            <NavigationButton onClick={changeIsModalLoginOpen}>
              Sign in
            </NavigationButton>
            <NavigationButton onClick={handleSignUp}>Sign up</NavigationButton>
          </div>
        )}

        <Modal isOpen={isModalLoginOpen} onClose={changeIsModalLoginOpen}>
          <SignIn />
        </Modal>

        <Modal isOpen={isModalRegisterOpen} onClose={changeIsModalSignUpOpen}>
          <RegistrationForm
            onSubmit={() => {
              alert("You successfylly registered!!!");
              changeIsModalSignUpOpen();
            }}
          />
        </Modal>
      </div>
    </header>
  );
};

export default Header;
