import Container from "@/components/Reusable/Container";
import MainLayouts from "@/layouts/MainLayouts";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderDetail from "@/components/Activity/Header/HeaderDetail";
import TodoEmpty from "@/components/Activity/EmptyState/Todo";
import CardContainer from "@/components/Activity/CardContainer";
import CardTodo from "@/components/Activity/CardContainer/CardTodo";
import services from "@/services";
import Modal from "@/components/Reusable/Modal";
import ModalDelete from "@/components/Reusable/ModalDelete";

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
  }, [router]);

  const handleModalEdit = (data) => {
    setEditModal(true);
    setSelectedData(data);
  };
  const handleModalDelete = (data) => {
    setModalDelete(true);
    setSelectedData(data);
  };

  // const onSortByNameAsc = () => {
  //   let newData = data?.todo_items.sort((a, b) =>
  //     a.title.localeCompare(b.title)
  //   );
  //   setTodoList(newData);
  //   setRefresh(!refresh);
  // };

  // const onSortByNameDesc = () => {
  //   let newData = data?.todo_items.sort((a, b) =>
  //     b?.title.localeCompare(a?.title)
  //   );
  //   setTodoList(newData);
  //   setRefresh(!refresh);
  // };

  // const onSortNewest = () => {
  //   let newData = data?.todo_items.sort((a, b) => b.id - a.id);
  //   setTodoList(newData);
  //   setRefresh(!refresh);
  // };

  // const onSortOldest = () => {
  //   let newData = data?.todo_items.sort((a, b) => aid - b.id);
  //   setTodoList(newData);
  //   setRefresh(!refresh);
  // };
  // const onSortStatus = () => {
  //   let newData = data?.todo_items.sort((a, b) => b.is_active - a.is_active);
  //   setTodoList(newData);
  //   setRefresh(!refresh);
  // };

  return (
    <MainLayouts>
      {showModal && (
        <Modal
          show={showModal}
          setShow={setShowModal}
          data={data?.id}
          refresh={refresh}
          handleRefresh={setRefresh}
        />
      )}
      {modalDelete && (
        <ModalDelete
          data={selectedData}
          handleModal={setModalDelete}
          show={modalDelete}
          handleRefresh={setRefresh}
          refresh={refresh}
          isListItem
        />
      )}
      {editModal && (
        <Modal
          isEdit
          show={editModal}
          setShow={setEditModal}
          data={selectedData}
          refresh={refresh}
          handleRefresh={setRefresh}
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
          showModal={showModal}
          setShowModal={setShowModal}
          handleTodo={setTodoList}
          todo={todoList}
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
