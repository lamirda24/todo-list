import Container from "@/components/Reusable/Container";
import services from "@/services";
import React, { useEffect, useState } from "react";
import CardContainer from "../CardContainer";
import ItemCard from "../CardContainer/Card";
import ActivityEmpty from "../EmptyState/Activity";
import HeaderActivity from "../Header";
import moment from "moment";
import { config } from "@/config/config";
import ModalDelete from "@/components/Reusable/ModalDelete";
import Alert from "@/components/Reusable/Alert";

const MainActivity = () => {
  const [data, setData] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const [showAlert, setShowAlert] = useState(false);

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

  const handleOpenmodalDelete = (data) => {
    setModalDelete(true);
    setSelectedData(data);
  };

  const handleCloseModal = () => {
    setModalDelete(false);
  };
  const handleShowAlert = () => {
    setShowAlert(true);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
    setRefresh(!refresh);
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
          show={modalDelete}
          data={selectedData}
          handleCloseModal={handleCloseModal}
          handleShowAlert={handleShowAlert}
        />
      )}
      {showAlert && (
        <Alert handleCloseAlert={handleCloseAlert} showAlert={showAlert} />
      )}
      <CardContainer>
        {data?.length > 0 ? (
          <>
            {data?.map((item, id) => (
              <ItemCard
                key={item?.id}
                cy={`activity-item-` + id}
                title={item?.title}
                date={moment(item?.created_at).format("DD MMMM YYYY")}
                id={item?.id}
                handleDelete={() => handleOpenmodalDelete(item)}
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
