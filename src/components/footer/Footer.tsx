import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="footer-content">
        <p>
          &copy; Unemployed students 2023
          {new Date().getFullYear() !== 2023
            ? `-${new Date().getFullYear()}`
            : null}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
