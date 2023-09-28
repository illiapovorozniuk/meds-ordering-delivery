import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import styles from "./Navigation.module.scss";

interface PropsNavigationLink {
  href: string;
}

const NavigationLink: FC<PropsWithChildren<PropsNavigationLink>> = ({
  href,
  children,
}) => {
  return (
    <Link href={href} className={styles.navLink}>
      {children}
    </Link>
  );
};

export default NavigationLink;
