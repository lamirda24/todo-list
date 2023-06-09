import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ItemCard = (props) => {
  const router = useRouter();

  const toActivity = (id) => {
    router.push(`/detail/${id}`);
  };
  return (
    <div
      data-cy={props.cy}
      className="flex flex-col px-[27px] py-[22px] shadow-xl bg-white w-[235px] h-[235px] rounded-xl justify-between"
    >
      <div
        className="h-full cursor-pointer"
        onClick={() => toActivity(props?.id)}
      >
        <p
          className="text-lg text-[#111111] font-bold"
          data-cy="activity-item-title"
        >
          {props?.title}
        </p>
      </div>

      <div />
      <div className="flex flex-row justify-between z-10">
        <p
          className="text-[14px] text-[#888888] font-medium"
          data-cy="activity-item-date"
        >
          {props?.date}
        </p>
        <button
          onClick={props?.handleDelete}
          data-cy="activity-item-delete-button"
        >
          <Image
            className="cursor-pointer z-2"
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
