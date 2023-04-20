import Container from "@/components/Reusable/Container";
import React from "react";
import ItemCard from "./Card";

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
