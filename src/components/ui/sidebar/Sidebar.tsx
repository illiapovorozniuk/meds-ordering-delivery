import Sides from "../../../utils/enums"
import React, {useState, FC, PropsWithChildren} from "react"
import styles from "./Sidebar.module.scss"
interface SidebarProps{
    isOpen: boolean;
    onClose: ()=> void;
    side: Sides
}

const Sidebar: FC<PropsWithChildren<SidebarProps>> = ({
    isOpen, 
    onClose,
    side,
    children,
}) => {
    const closeSidebar = ()=>{
        onClose();
    };

    return(
        <>
        {isOpen && (
            <div className={styles.sidebar}>
                <div className={styles.header}>
                    <div className={styles.title}>Title</div>
                    <div className={styles.close}>&times;</div>
                </div>
                {children}
            </div>
        )}
        </>
    )
}

export default Sidebar;

    