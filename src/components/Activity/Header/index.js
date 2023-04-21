import React from "react";

const HeaderActivity = (props) => {
  const add = () => {
    props?.action();
    props?.handleRefresh(props?.refresh);
  };
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="text-[36px] font-bold" data-cy="activity-title">
        Activity
      </p>
      <button
        className="rounded-[45px] px-[21px] bg-[#16ABF8] py-[13px] cursor-pointer"
        data-cy="activity-add-button"
        onClick={add}
      >
        <p className="text-white text-[18px] font-semibold">+ Tambah</p>
      </button>
    </div>
  );
};

export default HeaderActivity;
