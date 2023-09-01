/* eslint-disable react/prop-types */
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "react-modal";
import Male from "./Genders/Male";
import Female from "./Genders/Female";
import { motion } from "framer-motion";

const UserDetailModal = ({
  modalIsOpen,
  customStyles,
  closeModal,
  name,
  title,
  email,
  number,
  detail,
  gender,
}) => {
  return (
    <Modal
	  ariaHideApp={false}
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}>
      <motion.div
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        className="w-96 flex flex-col justify-between bg-[#ACD90B]">
        <div className="flex justify-end">
          <AiOutlineCloseCircle
            size="1.5em"
            onClick={closeModal}
            className="cursor-pointer"
          />
        </div>
        {gender === "male" ? <Male /> : <Female />}

        <div className="w-full">
          <p className="p-2 font-bold">
            <span className="font-semibold">Name :</span> {name}
          </p>
          <p className="p-2 font-bold">
            <span className="font-semibold">Job Title :</span> {title}
          </p>
          <p className="p-2 font-bold">
            <span className="font-semibold">Email :</span> {email}
          </p>
          <p className="p-2 font-bold">
            <span className="font-semibold">Number :</span> {number}
          </p>
          <p className="p-2 font-bold">
            <span className="font-semibold">Detail :</span> {detail}
          </p>
        </div>
      </motion.div>
    </Modal>
  );
};
export default UserDetailModal;
