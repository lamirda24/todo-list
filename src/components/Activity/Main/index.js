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
import ModalDelete from "@/components/Reusable/ModalDelete";

const MainActivity = () => {
  const [data, setData] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const addNewActivity = async () => {
    let payload = {
      title: "New Activity",
      email: config.email,
    };
    let res = await services.addActivity(payload);
    setRefresh(!refresh);
  };
  useEffect(() => {
    getData();
  }, [refresh]);

  const getData = async () => {
    let res = await services.getActivity();
    setData(res?.data);
  };

  const handleModalDelete = (data) => {
    setModalDelete(true);
    setSelectedData(data);
  };

  return (
    <Container
      data_cy="MainActivityContainer"
      className="flex flex-col gap-[60px]"
    >
      <HeaderActivity
        action={addNewActivity}
        handleRefresh={setRefresh}
        refresh={refresh}
      />
      {modalDelete && (
        <ModalDelete
          data={selectedData}
          handleModal={setModalDelete}
          show={modalDelete}
          handleRefresh={setRefresh}
          refresh={refresh}
          isActivity
        />
      )}
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
                handleDelete={() => handleModalDelete(item)}
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
