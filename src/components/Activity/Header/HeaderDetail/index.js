import services from "@/services";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SortComponent from "./SortComponent";

const HeaderDetail = (props) => {
  const router = useRouter();

  const { id, title } = props?.data;
  const { handleTodo, todo, handleShow } = props;
  const [newTitle, setNewTitle] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [sortSelected, setSortSelected] = useState("new");

  useEffect(() => {
    setNewTitle(title);
  }, [router, id]);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const onBackButton = () => {
    router.push("/");
  };

  const handleOnBlur = async () => {
    let payload = {
      title: newTitle,
    };
    let res = await services.changeTitleActivity(id, payload);
    setIsEdit(false);
    // handleRefresh(!refresh);
  };

  const onSort = () => {
    setShowSort(!showSort);
  };

  const onSortByNameAsc = () => {
    const newData = [...todo];
    newData.sort((a, b) => a.title.localeCompare(b.title));
    handleTodo(newData);
    setShowSort(false);
    setSortSelected("az");
    // handleRefresh(!refresh);
  };

  const onSortByNameDesc = () => {
    const newData = [...todo];
    newData?.sort((a, b) => b?.title.localeCompare(a?.title));
    handleTodo(newData);
    setSortSelected("za");
    setShowSort(false);
  };

  const onSortNewest = () => {
    const newData = [...todo];
    newData.sort((a, b) => b.id - a.id);
    handleTodo(newData);
    setSortSelected("new");

    setShowSort(false);
  };

  const onSortOldest = () => {
    const newData = [...todo];
    newData?.sort((a, b) => a.id - b.id);
    handleTodo(newData);
    setSortSelected("old");

    setShowSort(false);

    // handleRefresh(!refresh);
  };
  const onSortStatus = () => {
    const newData = [...todo];
    newData?.sort((a, b) => b.is_active - a.is_active);
    handleTodo(newData);
    setSortSelected("stat");
    setShowSort(false);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-[36px] items-center">
          <button onClick={onBackButton} data-cy="todo-back-button">
            <Image
              className="cursor-pointer"
              alt="back-button"
              src="/assets/back-button.png"
              width={16}
              height={16}
            />
          </button>

          <div className="flex flex-row  items-center gap-[23px]">
            {!isEdit ? (
              <p
                className="text-[36px] font-bold text-[#111]"
                data-cy="todo-title"
                onClick={handleEdit}
              >
                {newTitle}
              </p>
            ) : (
              <input
                type="text"
                name="activity"
                className="bg-transparent border-b-2 border-b-black w-auto focus:bg-transparent text-[36px] font-bold text-[#111] focus:outline-none"
                autoFocus
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={handleOnBlur}
                value={newTitle}
                data-cy="todo-title"
              />
            )}
            <button data-cy="todo-title-edit-button">
              <Image
                className="cursor-pointer"
                src="/assets/edit-button.png"
                alt="edit-button"
                width={15}
                height={15}
                onClick={handleEdit}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-[45px] items-center">
          <div className="relative">
            <button
              data-cy="todo-sort-button"
              className="p-4   rounded-[50%] border-solid border-2 border-[#E5E5E5] bg-none cursor-pointer"
              onClick={onSort}
            >
              <Image
                src="/assets/sort-button.png"
                width={24}
                height={24}
                alt="sort-button"
              />
            </button>
            {showSort && (
              <SortComponent
                sortAz={onSortByNameAsc}
                sortZa={onSortByNameDesc}
                sortNew={onSortNewest}
                sortOld={onSortOldest}
                sortStat={onSortStatus}
                type={sortSelected}
              />
            )}
          </div>

          <button
            className="rounded-[45px] px-[21px] bg-[#16ABF8]  py-[13px] cursor-pointer"
            data-cy="todo-add-button"
            onClick={handleShow}
          >
            <p className="text-white text-[18px]  font-semibold">+ Tambah</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderDetail;
