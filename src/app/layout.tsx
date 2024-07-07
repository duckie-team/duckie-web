import "./globals.css";
import { ReactNode } from "react";
import DuckieNavBar from "../../components/common/DuckieNavBar";
import { Metadata } from "next";
import DuckieTopBar from "../../components/common/DuckieTopBar";

export const metadata: Metadata = {
  title: {
    template: "%s | Duckie",
    default: "Duckie"
  },
  description: "Hello World",
}

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
    <head>
      <style>
        {`
            .root-layout {
              display: flex;
              flex-direction: row;
              height: 100vh;
              background-color: #1A1B1E; /* 배경색 설정 */
            }
            .content {
              flex: 1;
              overflow: auto;
              display: flex;
              flex-direction: column;
            }
            .navbar {
              width: 250px;
            }
          `}
      </style>
    </head>
    <body>
    <div className="root-layout">
      <div className="navbar">
        <DuckieNavBar />
      </div>
      <div className="content">
        <DuckieTopBar />
        {props.children}
        {props.modal}
      </div>
    </div>
    <div id="modal-root" />
    </body>
    </html>
  );
}