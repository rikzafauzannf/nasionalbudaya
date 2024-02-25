import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>Heading Game</div>
      {children}
    </>
  );
};

export default Layout;
