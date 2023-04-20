import Image from "next/image";
import React from "react";

const TodoEmpty = (props) => {
  return (
    <div
      data-cy="empty-state-todo"
      className="flex items-center justify-center cursor-pointer pt-[60px]"
      onClick={props?.action}
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
