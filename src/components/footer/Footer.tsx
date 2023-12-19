import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <footer className={isDarkMode ? styles.footer_dark : styles.footer_light}>
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
