import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./NavigationButton.module.scss";

interface PropsNavigationButton {
  onClick: () => void;
}

const NavigationButton: FC<PropsWithChildren<PropsNavigationButton>> = ({
  onClick,
  children,
}) => {
  return (
    <button className={styles.navButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default NavigationButton;
