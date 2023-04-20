import React from "react";

const HeaderActivity = (props) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="text-[36px] font-bold">Activity</p>
      <button
        className="rounded-[45px] px-[21px] bg-[#16ABF8] py-[13px] cursor-pointer"
        data-cy="button-add-activity"
        onClick={props?.action}
      >
        <p className="text-white text-[18px] font-semibold">+ Tambah</p>
      </button>
    </div>
  );
};

export default HeaderActivity;
