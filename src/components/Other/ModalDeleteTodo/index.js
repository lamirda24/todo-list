import services from "@/services";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const ModalDeleteTodo = (props) => {
  const { data, show, handleCloseModal } = props;

  const handleDeleteTodo = async () => {
    await services.deleteTodo(data?.id).then(() => {
      handleCloseModal();
    });
  };

  return (
    <Modal
      onClose={handleCloseModal}
      isOpen={show}
      isCentered
      data-cy="modal-delete"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent className="flex flex-col items-center w-[490px] py-[43px] ">
        <ModalHeader className="flex flex-col items-center">
          <span data-cy="modal-delete-icon">
            <svg
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42 52.5V52.535M42 31.5V38.5V31.5Z"
                stroke="#ED4C5C"
                strokeWidth="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5002 66.5012H66.5002C67.6423 66.4932 68.765 66.2059 69.7705 65.6643C70.7761 65.1227 71.6338 64.3433 72.2689 63.3941C72.904 62.4449 73.2972 61.3546 73.4142 60.2186C73.5312 59.0825 73.3685 57.935 72.9402 56.8762L48.0902 14.0012C47.4848 12.9071 46.5975 11.9952 45.5203 11.3601C44.4432 10.725 43.2156 10.3901 41.9652 10.3901C40.7148 10.3901 39.4872 10.725 38.41 11.3601C37.3329 11.9952 36.4455 12.9071 35.8402 14.0012L10.9902 56.8762C10.57 57.9108 10.4033 59.0308 10.5042 60.1428C10.6051 61.2549 10.9705 62.3266 11.57 63.2687C12.1694 64.2107 12.9856 64.9956 13.9502 65.558C14.9149 66.1203 16.0001 66.4438 17.1152 66.5012"
                stroke="#ED4C5C"
                strokeWidth="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </ModalHeader>

        <ModalBody className="" data-cy="modal-delete-title">
          <h3
            className="text-lg text-center font-medium  text-[#111]"
            id="modal-title"
            data-cy="modal-delete-title"
          >
            Apakah anda yakiny menghapus activity
            <span className="font-semibold"> “{data?.title}”?</span>
          </h3>
        </ModalBody>
        <ModalFooter className="flex flex-row-reverse gap-[10px]">
          <button
            data-cy="modal-delete-confirm-button"
            type="button"
            className="inline-flex w-[150px] justify-center rounded-[45px] bg-[#ED4C5C] px-[14px] py-[13px] text-lg font-semibold text-white  hover:bg-red-500"
            onClick={handleDeleteTodo}
          >
            Hapus
          </button>
          <button
            data-cy="modal-delete-cancel-button"
            type="button"
            className="inline-flex w-[150px] justify-center rounded-[45px] bg-[#F4F4F4] text-lg text-[#4A4A4A] px-[14px] py-[13px] font-semibold shadow-sm "
            onClick={handleCloseModal}
          >
            Batal
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDeleteTodo;
