import Image from "next/image";
import React from "react";

const ItemCard = (props) => {
  return (
    <div
      data-cy="card-item-activity"
      className="flex flex-col px-[27px] py-[22px] shadow-xl bg-white w-[235px] h-[235px] rounded-xl justify-between "
    >
      <p className="text-lg text-[#111111] font-bold">{props?.title}</p>
      <div className="flex flex-row justify-between">
        <p className="text-[14px] text-[#888888] font-medium">{props?.date}</p>
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
    </div>
  );
};

export default ItemCard;
