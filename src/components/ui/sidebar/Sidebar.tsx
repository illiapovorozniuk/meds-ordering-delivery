import Sides from "../../../utils/enums";
import React, { useState, FC, PropsWithChildren, useEffect } from "react";
import styles from "./Sidebar.module.scss";
import { useKeyDown } from "../../../hooks/useKeyDown";
interface SidebarProps {
  title: string;
  onClose: () => void;
  side: Sides;
}

const Sidebar: FC<PropsWithChildren<SidebarProps>> = ({
  side,
  children,
  title,
  onClose,
}) => {
  useKeyDown("escape", onClose);

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.close} onClick={onClose}>
            &times;
          </div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
