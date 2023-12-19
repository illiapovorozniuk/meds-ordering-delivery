"use client";
import { useState } from "react";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import darkStyle from "./darkTheme.module.scss";
import lightStyle from "./lightTheme.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setDarkMode] = useState<boolean>(true);

  const toggleTheme = (): void => {
    setDarkMode(!isDarkMode);
  };
  return (
    <html lang="en">
      <body className={isDarkMode ? darkStyle.body : lightStyle.body}>
        <div className={isDarkMode ? darkStyle.wrapper : lightStyle.wrapper}>
          <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
          <div className={isDarkMode ? darkStyle.main : lightStyle.main}>
            {children}
          </div>
          <Footer isDarkMode={isDarkMode} />
        </div>
      </body>
    </html>
  );
}
