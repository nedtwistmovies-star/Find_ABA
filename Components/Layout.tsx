import React from "react";
import { APP_NAME } from "../constants";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div>
      <header>
        <h1>{title || APP_NAME}</h1>
      </header>

      <main>{children}</main>

      <footer>
        <small>© {new Date().getFullYear()} {APP_NAME}</small>
      </footer>
    </div>
  );
};

export default Layout;
