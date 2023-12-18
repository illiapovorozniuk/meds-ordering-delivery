import React, { useState, FC, PropsWithChildren } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose,
  children,
}) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.closeButton} onClick={closeModal}>
              &times;
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
