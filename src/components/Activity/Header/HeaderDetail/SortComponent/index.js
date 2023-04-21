import Image from "next/image";
import React from "react";

const SortComponent = (props) => {
  const { sortAz, sortZa, sortNew, sortOld, sortStat } = props;
  return (
    <div
      data-cy="Sort"
      className="shadow-md bg-[#FFF] absolute z-10 rounded-[6px] w-[235px]   grid divide-y-2 divide-[#E5E5E5] "
    >
      <div
        className="flex flex-row items-center justify-between py-[14px] px-[21px] cursor-pointer "
        data-cy="sort-latest"
      >
        <button
          className="w-full flex flex-row gap-2 items-center"
          onClick={sortNew}
        >
          <Image
            src="/assets/sort/latest.png"
            alt="latest"
            width={18}
            height={18}
          />
          <p className="text-[16px] text-[#4A4A4A] font-[400]">Terbaru</p>
        </button>
        {/* <div>
          <Image
            src="/assets/sort/check.png"
            alt="check"
            width={18}
            height={18}
          />
        </div> */}
      </div>
      <div
        className="flex flex-row items-center justify-between py-[14px] px-[21px] cursor-pointer"
        data-cy="sort-oldest"
      >
        <button
          className="w-full flex flex-row gap-2 items-center"
          onClick={sortOld}
        >
          <Image
            src="/assets/sort/oldest.png"
            alt="oldest"
            width={18}
            height={18}
          />
          <p className="text-[16px] text-[#4A4A4A] font-[400]">Terlama</p>
        </button>
        {/* <div>
          <Image
            src="/assets/sort/check.png"
            alt="check"
            width={18}
            height={18}
          />
        </div> */}
      </div>
      <div
        className="flex flex-row items-center justify-between py-[14px] px-[21px] cursor-pointer"
        data-cy="sort-az"
      >
        <button
          className="w-full flex flex-row gap-2 items-center"
          onClick={sortAz}
        >
          <Image src="/assets/sort/az.png" alt="az" width={18} height={18} />
          <p className="text-[16px] text-[#4A4A4A] font-[400]">AZ</p>
        </button>
        {/* <div>
          <Image
            src="/assets/sort/check.png"
            alt="check"
            width={18}
            height={18}
          />
        </div> */}
      </div>
      <div
        className="flex flex-row items-center justify-between py-[14px] px-[21px] cursor-pointer"
        data-cy="sort-za"
      >
        <button
          className="w-full flex flex-row gap-2 items-center"
          onClick={sortZa}
        >
          <Image src="/assets/sort/za.png" alt="za" width={18} height={18} />
          <p className="text-[16px] text-[#4A4A4A] font-[400]">ZA</p>
        </button>
        {/* <div>
          <Image
            src="/assets/sort/check.png"
            alt="check"
            width={18}
            height={18}
          />
        </div> */}
      </div>
      <div
        className="flex flex-row items-center justify-between py-[14px] px-[21px] cursor-pointer"
        data-cy="sort-unfinished"
      >
        <button
          className="w-full flex flex-row gap-2 items-center"
          onClick={sortStat}
        >
          <Image
            src="/assets/sort/unfinished.png"
            alt="unfinished"
            width={18}
            height={18}
          />
          <p className="text-[16px] text-[#4A4A4A] font-[400]">Belum Selesai</p>
        </button>
        {/* <div>
          <Image
            src="/assets/sort/check.png"
            alt="check"
            width={18}
            height={18}
          />
        </div> */}
      </div>
    </div>
  );
};

export default SortComponent;
