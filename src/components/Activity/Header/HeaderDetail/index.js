import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const HeaderDetail = (props) => {
  const [title, setTitle] = useState("Main Activity");
  const [isEdit, setIsEdit] = useState(false);

  const router = useRouter();

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const addList = () => {
    console.log("test");
  };

  const onBackButton = () => {
    router.push("/");
  };

  const handleOnBlur = () => {
    setIsEdit(false);
    console.log(title);
  };

  const onSort = () => {
    console.log("sort");
  };
  return (
    <div
      data-cy="header-detail-activity"
      className="flex flex-row justify-between items-center"
    >
      <div className="flex flex-row gap-[36px] items-center">
        <button onClick={onBackButton}>
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
            <p className="text-[36px] font-bold text-[#111]">{title}</p>
          ) : (
            <input
              type="text"
              name="activity"
              className="bg-transparent border-b-2 border-b-black w-auto focus:bg-transparent text-[36px] font-bold text-[#111] focus:outline-none"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleOnBlur}
              value={title}
            />
          )}
          <div>
            <Image
              className="cursor-pointer"
              src="/assets/edit-button.png"
              alt="edit-button"
              width={15}
              height={15}
              onClick={handleEdit}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[45px] items-center">
        <button
          data-cy="button-sort-list-activity"
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
        <button
          className="rounded-[45px] px-[21px] bg-[#16ABF8]  py-[13px] cursor-pointer"
          data-cy="button-add-list-activity"
          onClick={addList}
        >
          <p className="text-white text-[18px]  font-semibold">+ Tambah</p>
        </button>
      </div>
    </div>
  );
};

export default HeaderDetail;
