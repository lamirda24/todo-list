import Container from "@/components/Reusable/Container";
import api from "@/config/api";
import services from "@/services";
import React, { useEffect, useState } from "react";
import CardContainer from "../CardContainer";
import ItemCard from "../CardContainer/Card";
import ActivityEmpty from "../EmptyState/Activity";
import HeaderActivity from "../Header";
import moment from "moment";
import { config } from "@/config/config";

const MainActivity = () => {
  const [data, setData] = useState("");
  const [refresh, setRefesh] = useState(false);

  const addNewActivity = () => {
    let payload = {
      title: "New Activity",
      email: config.email,
    };

    let res = services.addActivity(payload);
    console.log(res, "res");
    setRefesh(!refresh);
  };
  useEffect(() => {
    getData();
  }, [refresh]);

  const getData = async () => {
    let res = await services.getActivity();
    setData(res?.data);
  };

  return (
    <Container
      data_cy="MainActivityContainer"
      className="flex flex-col gap-[60px]"
    >
      <HeaderActivity action={addNewActivity} />
      <CardContainer>
        {data.length > 0 ? (
          <>
            {data?.map((item, id) => (
              <ItemCard
                key={item?.id}
                cy={`activity-item-` + id}
                title={item?.title}
                date={moment(item?.created_at).format("DD MMMM YYYY")}
                id={item?.id}
              />
            ))}
          </>
        ) : (
          <ActivityEmpty action={addNewActivity} />
        )}
      </CardContainer>
    </Container>
  );
};

export default MainActivity;
