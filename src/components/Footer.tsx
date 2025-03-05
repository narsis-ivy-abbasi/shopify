import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-zinc-50 text-center text-surface border ">
      <div className="w-full bg-black/5 p-4 text-center">
        &copy; {new Date().getFullYear()} My Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
