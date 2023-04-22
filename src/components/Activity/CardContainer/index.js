import Container from "@/components/Other/Container";
import React from "react";

const CardContainer = ({ children }) => {
  return (
    <Container
      data_cy="card-container"
      className="flex flex-row gap-[20px] flex-wrap pb-20"
    >
      {children}
    </Container>
  );
};

export default CardContainer;
