import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-72">
      <Header />
      <main className="min-w-72 mb-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
