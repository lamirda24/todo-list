import Image from "next/image";
import React from "react";

const CardTodo = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full bg-white shadow-xl px-[28px] py-[30px] rounded-xl">
      <div className="flex flex-row gap-[16px] items-center">
        <input type="checkbox" className="w-[20px] h-[20px] accent-[#16ABF8]" />

        <p>o</p>
        <p>Telur Ayam</p>
        <button>
          <Image
            className="cursor-pointer"
            src="/assets/edit-button.png"
            alt="edit-button"
            width={15}
            height={15}
            // onClick={handleEdit}
          />
        </button>
      </div>
      <button onClick={() => {}}>
        <Image
          className="cursor-pointer"
          alt="delete-button"
          src="/assets/delete-button.png"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
};

export default CardTodo;
