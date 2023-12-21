"use client";
import "./globals.css";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body /*className={}*/>
          <div className="wrapper">
            <Header />
            <div className="main">{children}</div>
            <Footer />
          </div>
        </body>
      </html>
    </Provider>
  );
}
