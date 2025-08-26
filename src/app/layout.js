"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>Duncan Miard - Portfolio</title>
        <meta name="description" content="Portfolio de Duncan Miard, développeur front-end / fullstack." />
      </Head>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
