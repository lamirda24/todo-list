import React from "react";

const Alert = () => {
  return (
    <div
      className="flex flex-row px-[30px] py-[20px] gap-[10px] items-center"
      data-cy="modal-information"
    >
      <span data-cy="modal-information-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="#00A790"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8V12"
            stroke="#00A790"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16H12.01"
            stroke="#00A790"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <p
        className="text-[14px] font-medium text-[#111]"
        data-cy="modal-information-title"
      >
        Activity berhasil dihapus
      </p>
    </div>
  );
};

export default Alert;
