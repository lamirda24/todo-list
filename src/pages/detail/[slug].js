import Container from "@/components/Other/Container";
import MainLayouts from "@/layouts/MainLayouts";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderDetail from "@/components/Activity/Header/HeaderDetail";
import TodoEmpty from "@/components/Activity/EmptyState/Todo";
import CardTodo from "@/components/Activity/CardContainer/CardTodo";
import services from "@/services";
import Modal from "@/components/Other/ModalAdd";
import ModalDeleteTodo from "@/components/Other/ModalDeleteTodo";
import ModalAdd from "@/components/Other/ModalAdd";
import Alert from "@/components/Other/Alert";

const DetailActivity = ({ todos }) => {
  const router = useRouter();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const [modalDelete, setModalDelete] = useState(false);
  const [todoList, setTodoList] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const getDetail = async () => {
    const res = await services.getDetailActivity(router?.query?.slug);
    setData(res);
    setTodoList(res?.todo_items);
    setLoading(false);
  };

  useEffect(() => {
    if (router?.query?.slug) {
      getDetail();
    }

    // onSortByDateAsc();
  }, [router, refresh]);

  const handleModalEdit = (data) => {
    setEditModal(true);
    setSelectedData(data);
  };
  const handleModalDelete = (data) => {
    setModalDelete(true);
    setSelectedData(data);
  };

  const handleCloseDelete = () => {
    setModalDelete(false);
    setRefresh(!refresh);
  };

  const handleShowAddModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setRefresh(!refresh);
  };
  const handleCloseEdit = () => {
    setEditModal(false);
    setRefresh(!refresh);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
    setRefresh(!refresh);
  };
  return (
    <MainLayouts>
      {showModal && (
        <ModalAdd
          show={showModal}
          handleCloseModal={handleCloseModal}
          isEdit={false}
          data={data?.id}
        />
      )}
      {modalDelete && (
        <ModalDeleteTodo
          data={selectedData}
          show={modalDelete}
          handleCloseModal={handleCloseDelete}
          handleShowAlert={handleShowAlert}
        />
      )}
      {showAlert && (
        <Alert handleCloseAlert={handleCloseAlert} showAlert={showAlert} />
      )}
      {editModal && (
        <ModalAdd
          show={editModal}
          handleCloseModal={handleCloseEdit}
          isEdit={true}
          data={selectedData}
        />
      )}

      <Container
        data_cy="detail-activity-container"
        className="pt-[60px] h-[100vh]"
      >
        <HeaderDetail
          data={data}
          handleRefresh={setRefresh}
          refresh={refresh}
          handleShow={handleShowAddModal}
          todo={todoList}
          handleTodo={setTodoList}
        />
        <Container className="pt-[60px] flex flex-col gap-[10px]">
          {todoList?.length > 0 ? (
            <>
              {todoList?.map((item, id) => (
                <div key={id}>
                  <CardTodo
                    cy={`todo-item-${id}`}
                    data={item}
                    handleRefresh={setRefresh}
                    refresh={refresh}
                    handleEdit={() => handleModalEdit(item)}
                    handleDelete={() => handleModalDelete(item)}
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              <TodoEmpty showModal={showModal} setShowModal={setShowModal} />
            </>
          )}
        </Container>
      </Container>
    </MainLayouts>
  );
};

export default DetailActivity;
