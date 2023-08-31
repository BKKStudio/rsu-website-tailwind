"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import SidebarModel from "./components/SidebarModel";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>มหาวิทยาลัยรังสิต | RANGSIT UNIVERSITY</title>
        <link
          rel="icon"
          href="/image/Logo_universe/Rangsit.png"
          type="image/png"
          sizes="35x35"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anuphan:wght@200&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Anuphan:wght@200&family=Sriracha&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-anuphan font-bold">
        {children}
        </body>
    </html>
  );
}
