import "./globals.css";
import { ReactNode } from "react";
import DuckieNavBar from "../../components/common/DuckieNavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Duckie",
    default: "Duckie"
  },
  description: "Hello World",
}

export default function RootLayout({children}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html>
      <body>
        <DuckieNavBar/>
        {children}
      </body>
    </html>
  )
}