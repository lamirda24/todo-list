import Container from "@/components/Reusable/Container";
import React from "react";
import CardContainer from "../CardContainer";
import ItemCard from "../CardContainer/Card";
import ActivityEmpty from "../EmptyState/Activity";
import HeaderActivity from "../Header";

const MainActivity = () => {
  const addActivity = () => {
    console.log("hello");
  };
  return (
    <Container
      data_cy="MainActivityContainer"
      className="flex flex-col gap-[60px]"
    >
      <HeaderActivity action={addActivity} />
      {/* <ActivityEmpty action={addActivity} /> */}
      <CardContainer>
        <ItemCard title="Mengerjakan Paperworks" date="5 Oktober 2021" />
        <ItemCard title="Mengerjakan Paperworks" date="5 Oktober 2021" />
        <ItemCard title="Mengerjakan Paperworks" date="5 Oktober 2021" />
        <ItemCard title="Mengerjakan Paperworks" date="5 Oktober 2021" />
        <ItemCard title="Mengerjakan Paperworks" date="5 Oktober 2021" />
        <ItemCard title="Mengerjakan Paperworks" date="5 Oktober 2021" />
        <ItemCard title="Mengerjakan Paperworks" date="5 Oktober 2021" />
        <ItemCard title="Mengerjakan Paperworks" date="5 Oktober 2021" />
        <ItemCard title="Mengerjakan Paperworks" date="5 Oktober 2021" />
        <ItemCard title="Mengerjakan Paperworks" date="5 Oktober 2021" />
        <ItemCard title="Mengerjakan Paperworks" date="5 Oktober 2021" />
      </CardContainer>
    </Container>
  );
};

export default MainActivity;
