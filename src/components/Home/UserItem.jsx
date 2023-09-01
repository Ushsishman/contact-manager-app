/* eslint-disable react/prop-types */
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsFillEyeFill, BsFillPencilFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/userReducer";
import { useState } from "react";
import Male from "./Genders/Male";
import Female from "./Genders/Female";
import UpdateUserModal from "./UpdateUserModal";
import UserDetailModal from "./UserDetailModal";
import { motion } from "framer-motion";
import Button from "./Button";

{
  /* THIS IS STYLING FOR MODAL */
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ACD90B",
  },
};

const UserItem = ({ name, number, email, id, title, detail, gender }) => {
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteUser({ id }));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const openUpdateModal = () => {
    setUpdateModalIsOpen(true);
  };
  {
    /* ANIMATIONS */
  }
  const item = {
    hidden: {
      opacity: 0,
      translateY: 20,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  return (
    <motion.div
      variants={item}
      className="bg-[#ACD90B] p-4 mt-2 mb-4 flex flex-row justify-between items-center rounded-3xl">
      <div className="mr-5">{gender === "male" ? <Male /> : <Female />}</div>
      <div className="w-full text-black">
        <p className="p-2 font-bold">
          <span className="font-semibold">Name :</span> {name}
        </p>
        <p className="p-2 font-bold">
          <span className="font-semibold">Number :</span> {number}
        </p>
        <p className="p-2 font-bold">
          <span className="font-semibold">Email :</span> {email}
        </p>
      </div>
      {/* UPDATE READ DELETE BUTTONS */}
      <div className="ml-4 flex flex-col">
        <Button
          handler={openModal}
          icon={<BsFillEyeFill />}
          style="bg-[#D9AC25] p-3 my-1 rounded"
        />
        <Button
          handler={openUpdateModal}
          icon={<BsFillPencilFill />}
          style="bg-[#0583F2] p-3 my-1 rounded"
        />
        <Button
          handler={deleteHandler}
          icon={<RiDeleteBin6Line />}
          style="bg-red-600 p-3 my-1 rounded"
        />
      </div>
      {/* UPDATE AND SHOW DETAILS MODALS FOR EVERY USER */}
      <UserDetailModal
        modalIsOpen={modalIsOpen}
        customStyles={customStyles}
        closeModal={closeModal}
        name={name}
        title={title}
        email={email}
        number={number}
        detail={detail}
        gender={gender}
      />
      <UpdateUserModal
        updateModalIsOpen={updateModalIsOpen}
        setUpdateModalIsOpen={setUpdateModalIsOpen}
        id={id}
      />
    </motion.div>
  );
};
export default UserItem;
