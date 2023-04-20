import Container from "@/components/Reusable/Container";
import MainLayouts from "@/layouts/MainLayouts";
import React from "react";
import { useRouter } from "next/router";
import HeaderDetail from "@/components/Activity/Header/HeaderDetail";
import TodoEmpty from "@/components/Activity/EmptyState/Todo";
import CardContainer from "@/components/Activity/CardContainer";
import CardTodo from "@/components/Activity/CardContainer/CardTodo";

const DetailActivity = () => {
  const router = useRouter();
  console.log(router, "router");
  //   const slugs = (slug) => {
  //     try {
  //       return slug || 0;
  //     } catch (error) {
  //       router.push("/");
  //       return 0;
  //     }
  //   };
  //   console.log(slugs);

  return (
    <MainLayouts>
      <Container
        data_cy="detail-activity-container"
        className="pt-[60px] h-[100vh]"
      >
        <HeaderDetail />
        <Container className="pt-[60px] flex flex-col gap-[10px]">
          <CardTodo />
        </Container>

        {/* <TodoEmpty /> */}
      </Container>
    </MainLayouts>
  );
};

export default DetailActivity;
