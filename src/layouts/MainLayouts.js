import Header from "@/components/Header";
import React from "react";

const MainLayouts = ({ children }) => {
  return (
    <div
      data-cy="MainLayouts"
      className="flex min-h-screen flex-col items-center !bg-[#F4F4F4]"
    >
      <Header data-cy="Header" />
      {/* spacer */}
      <div className="w-full h-[105px]" />
      {children}
      <footer></footer>
    </div>
  );
};

export default MainLayouts;
