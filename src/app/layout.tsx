import type { Metadata } from "next";
import "./globals.css";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Amazon Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [ismount, setMount] = useState(false);
  // useEffect(() => {
  //   setMount(true);
  // }, []);
  // if(!ismount){
  //   return null;
  // }
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
