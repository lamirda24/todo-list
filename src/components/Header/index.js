import React from "react";
import Container from "../Reusable/Container";

const Header = (props) => {
  return (
    <div {...props} className="min-h-[105px] fixed z-[11] w-[100vw]">
      <div
        className="fixed top-0 flex w-full flex-col items-start h-[105px]  bg-[#16ABF8;] mx-auto justify-center"
        data-cy="header-background"
      >
        <Container data_cy="HeaderContentContainer">
          <p
            className="text-white font-bold text-[24px]"
            data-cy="header-title"
          >
            TODO LIST APP
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Header;
