import services from "@/services";
import { options } from "@/utils/priority";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

const ModalAdd = (props) => {
  // const router = useRouter();
  const { data, show, handleCloseModal, isEdit } = props;
  const [selected, setSelected] = useState("");
  const [showOption, setShowOption] = useState(false);
  const [name, setName] = useState("");
  const option = options;

  const handleChangeDropDown = (item) => {
    setSelected(item);
    setShowOption(false);
  };

  const hanldeChangeName = (e) => {
    setName(e.target.value);
  };
  const handleSelected = () => {
    let selectedData;
    option?.map((item) => {
      if (item?.priority === props?.data?.priority) {
        selectedData = item;
      }
    });
    setSelected(selectedData);
    setName(props?.data?.title);
  };

  const onSubmit = async () => {
    let payload;
    if (!isEdit) {
      payload = {
        activity_group_id: String(props?.data),
        title: name,
        priority: selected.priority,
      };
      await services.addTodo(payload);
    } else {
      payload = {
        title: name,
        priority: selected.priority,
        is_active: 1,
      };
      await services.editTodoStatus(props?.data?.id, payload);
    }
    handleCloseModal();

    // return;
  };

  useEffect(() => {
    if (isEdit) {
      handleSelected();
    }
  }, []);

  return (
    <Modal onClose={handleCloseModal} isOpen={show} isCentered size="xl">
      <ModalOverlay />
      <ModalContent className="grid divide-y-2" data-cy="modal-add">
        <ModalHeader>
          <h3 data-cy="modal-add-title" className="text-lg font-bold">
            Tambah List Item
          </h3>
        </ModalHeader>
        <ModalCloseButton data-cy="modal-add-close-button" />
        <ModalBody className="">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
              <label
                data-cy="modal-add-name-title"
                className="text-[12px] font-bold"
              >
                NAMA LIST ITEM
              </label>
              <input
                type="text"
                className="border-2 border-[#E5E5E5] bg-white rounded-[6px] min-h-[52px] px-[18px] py-[14px]"
                data-cy="modal-add-name-input"
                placeholder="Tambahkan nama list item"
                onChange={(e) => hanldeChangeName(e)}
                value={name}
              />
            </div>
            <div className="flex flex-col gap-2 pt-[26px] w-[205px]">
              <label
                data-cy="modal-add-priority-title"
                className="text-[12px] font-bold"
              >
                PRIORITY
              </label>
              <div
                className="relative inline-block text-left"
                data-cy="modal-priority-dropdown"
              >
                <button
                  type="button"
                  className="inline-flex w-full justify-between gap-x-1.5 rounded-d bg-white border-2  rounded-[6px] border-[#E5E5E5] px-3 py-2 text-sm ` text-[#111] shadow-sm hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setShowOption(!showOption)}
                >
                  {!selected ? (
                    <> Pilih priority</>
                  ) : (
                    <div
                      className="flex flex-row items-center gap-2
                        "
                    >
                      <span>{selected.pict}</span>
                      {selected.label}
                    </div>
                  )}
                  <div className={`duration-300 ${showOption && "rotate-180"}`}>
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                {showOption && (
                  <div
                    className="absolute -right-[20px]  mt-2 w-56 z-[13] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div role="none" className="grid divide-y-2 ">
                      {option?.map((item) => (
                        <div
                          className="text-gray-700  p-4 text-sm flex flex-row gap-2 cursor-pointer hover:bg-slate-400"
                          data-cy={item.cy}
                          key={item?.priority}
                          onClick={() => handleChangeDropDown(item)}
                        >
                          <span>{item.pict}</span>
                          <p>{item?.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter className="flex justify-end">
          <button
            type="button"
            className={`inline-flex w-full cursor-pointer justify-center rounded-[45px] bg-[#16ABF8] px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto ${
              name === "" ? "opacity-[0.2]" : "hover:opacity-[0.8]"
            }`}
            onClick={onSubmit}
            disabled={name === "" ? true : false}
          >
            Simpan
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    // <div
    //   data-cy="modal-add"
    //   className="relative z-[12]"
    //   aria-labelledby="modal-title"
    //   role="dialog"
    //   aria-modal="true"
    // >
    //   <div className="fixed inset-0 bg-[#111] bg-opacity-40 transition-opacity"></div>
    //   <div className="fixed inset-0 z-10 overflow-y-auto ">
    //     <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    //       <div className="relative transform bg-white text-left transition-all sm:my-8 sm:w-full sm:max-w-[803px] grid divide-y-2 rounded-[14px]">
    //         <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
    //           <div className="flex flex-row justify-between items-center w-full">
    //             <h3 data-cy="modal-add-title" className="text-lg font-bold">
    //               Tambah List Item
    //             </h3>
    //             <button
    //               type="button"
    //               className=""
    //               onClick={() => setShow(!show)}
    //               data-cy="modal-add-close-button"
    //             >
    //               <svg
    //                 width="14"
    //                 height="14"
    //                 viewBox="0 0 14 14"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M13 1L1 13"
    //                   stroke="#A4A4A4"
    //                   strokeWidth="2"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 />
    //                 <path
    //                   d="M1 1L13 13"
    //                   stroke="#A4A4A4"
    //                   strokeWidth="2"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 />
    //               </svg>
    //             </button>
    //           </div>
    //         </div>
    // <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
    //   <form onSubmit={onSubmit}>
    //     <div className="flex flex-col gap-2">
    //       <label
    //         data-cy="modal-add-name-title"
    //         className="text-[12px] font-bold"
    //       >
    //         NAMA LIST ITEM
    //       </label>
    //       <input
    //         type="text"
    //         className="border-2 border-[#E5E5E5] bg-white rounded-[6px] min-h-[52px] px-[18px] py-[14px]"
    //         data-cy="modal-add-name-input"
    //         placeholder="Tambahkan nama list item"
    //         onChange={(e) => hanldeChangeName(e)}
    //         value={name}
    //       />
    //     </div>
    //     <div className="flex flex-col gap-2 pt-[26px] w-[205px]">
    //       <label
    //         data-cy="modal-add-name-title"
    //         className="text-[12px] font-bold"
    //       >
    //         NAMA LIST ITEM
    //       </label>
    //       <div
    //         className="relative inline-block text-left"
    //         data-cy="modal-priority-dropdown"
    //       >
    //         <button
    //           type="button"
    //           className="inline-flex w-full justify-between gap-x-1.5 rounded-d bg-white border-2  rounded-[6px] border-[#E5E5E5] px-3 py-2 text-sm ` text-[#111] shadow-sm hover:bg-gray-50"
    //           id="menu-button"
    //           aria-expanded="true"
    //           aria-haspopup="true"
    //           onClick={() => setShowOption(!showOption)}
    //         >
    //           {!selected ? (
    //             <> Pilih priority</>
    //           ) : (
    //             <div
    //               className="flex flex-row items-center gap-2
    //             "
    //             >
    //               <span>{selected.pict}</span>
    //               {selected.label}
    //             </div>
    //           )}
    //           <div
    //             className={`duration-300 ${showOption && "rotate-180"}`}
    //           >
    //             <svg
    //               className="-mr-1 h-5 w-5 text-gray-400"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //               aria-hidden="true"
    //             >
    //               <path
    //                 fillRule="evenodd"
    //                 d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           </div>
    //         </button>
    //         {showOption && (
    //           <div
    //             className="absolute -right-[20px]  mt-2 w-56 z-[13] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    //             role="menu"
    //             aria-orientation="vertical"
    //             aria-labelledby="menu-button"
    //             tabIndex="-1"
    //           >
    //             <div role="none" className="grid divide-y-2 ">
    //               {option?.map((item) => (
    //                 <div
    //                   className="text-gray-700  p-4 text-sm flex flex-row gap-2 cursor-pointer hover:bg-slate-400"
    //                   data-cy={item.cy}
    //                   key={item?.priority}
    //                   onClick={() => handleChangeDropDown(item)}
    //                 >
    //                   <span>{item.pict}</span>
    //                   <p>{item?.label}</p>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </form>
    // </div>
    //         <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
    //           <button
    //             type="button"
    //             className={`inline-flex w-full cursor-pointer justify-center rounded-[45px] bg-[#16ABF8] px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto ${
    //               name === "" ? "opacity-[0.2]" : "hover:opacity-[0.8]"
    //             }`}
    //             onClick={onSubmit}
    //             disabled={name === "" ? true : false}
    //           >
    //             Simpan
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ModalAdd;