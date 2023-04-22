import React from "react";

const Container = ({ children, className, data_cy }) => {
  return (
    <div
      data-cy={data_cy}
      className={`mx-auto xl:w-[1000px] px-0 ${className && className}`}
    >
      {children}
    </div>
  );
};

export default Container;
