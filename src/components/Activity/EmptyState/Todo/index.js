import Image from "next/image";
import React from "react";

const TodoEmpty = (props) => {
  const { setShowModal } = props;
  const addList = () => {
    setShowModal(true);
  };
  return (
    <div
      data-cy="todo-empty-state"
      className="flex items-center justify-center cursor-pointer pt-[60px]"
      onClick={addList}
    >
      <Image
        src={`/assets/todo-empty-state.png`}
        alt="empty-state"
        width={541}
        height={413}
      />
    </div>
  );
};

export default TodoEmpty;
