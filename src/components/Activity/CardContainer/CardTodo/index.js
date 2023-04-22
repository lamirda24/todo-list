import services from "@/services";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { options } from "@/utils/priority";
import Modal from "@/components/Other/Modal";

const CardTodo = (props) => {
  const { title, id, is_active, priority, activity_group_id } = props?.data;
  const { handleRefresh, refresh, handleEdit, handleDelete } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const onChangeCheckBox = () => {
    let payload;
    switch (is_active) {
      case 0:
        payload = {
          is_active: 1,
        };
        break;
      case 1:
        payload = {
          is_active: 0,
        };
      default:
        break;
    }
    changeStatus(payload);
  };

  const changeStatus = async (payload) => {
    await services.editTodoStatus(id, payload).then(() => {
      handleRefresh(!refresh);
    });
  };

  useEffect(() => {
    readStatus();
  }, [refresh, is_active]);

  const readStatus = () => {
    switch (is_active) {
      case 0:
        setIsChecked(true);
        break;
      case 1:
        setIsChecked(false);
        break;
      default:
        break;
    }
  };

  const readPriority = () => {
    let pict;
    options?.map((item) => {
      if (item?.priority === priority) {
        pict = item?.pict;
      }
    });
    return pict;
  };

  return (
    <>
      <div
        className="flex flex-row items-center justify-between w-full bg-white shadow-xl px-[28px] py-[30px] rounded-xl"
        data-cy={props?.cy}
      >
        <div className="flex flex-row gap-[16px] items-center">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] accent-[#16ABF8]"
            data-cy="todo-item-checkbox"
            onChange={onChangeCheckBox}
            checked={isChecked}
          />
          <span>{readPriority()}</span>
          <div data-cy="todo-item-title" className="text-lg font-medium">
            {is_active === 0 ? (
              <p className="line-through text-[#888888] decoration-[#888888]">
                {title}
              </p>
            ) : (
              <>
                <p>{title}</p>
              </>
            )}
          </div>
          <button onClick={handleEdit} data-cy="todo-item-edit-delete">
            <Image
              className="cursor-pointer"
              src="/assets/edit-button.png"
              alt="edit-button"
              width={15}
              height={15}
            />
          </button>
        </div>
        <button onClick={handleDelete} data-cy="todo-item-delete-button">
          <Image
            className="cursor-pointer"
            alt="delete-button"
            src="/assets/delete-button.png"
            width={16}
            height={18}
          />
        </button>
      </div>
    </>
  );
};

export default CardTodo;
