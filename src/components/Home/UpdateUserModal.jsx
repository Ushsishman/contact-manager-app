/* eslint-disable react/prop-types */
import Modal from "react-modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../features/userReducer";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Form from "../General/Form";
import { motion } from "framer-motion";

const customStyles = {
  content: {
    maxHeight: "80%",
    width: "90%",
    maxWidth: "400px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ACD90B",
  },
};

const UpdateUserModal = ({ updateModalIsOpen, setUpdateModalIsOpen, id }) => {
  const [nameUpdt, setNameUpdt] = useState("");
  const [emailUpdt, setEmailUpdt] = useState("");
  const [numberUpdt, setNumberUpdt] = useState("");
  const [detailUpdt, setDetailUpdt] = useState("");
  const [titleUpdt, setTitleUpdt] = useState("");
  const [genderUpdt, setGenderUpdt] = useState("");

  const dispatch = useDispatch();

  const closeUpdateModal = () => {
    setUpdateModalIsOpen(false);
  };
  const updateHandler = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: nameUpdt,
        number: numberUpdt,
        email: emailUpdt,
        title: titleUpdt,
        gender: genderUpdt,
        detail: detailUpdt,
      }),
    );
    setNameUpdt("");
    setEmailUpdt("");
    setNumberUpdt("");
    setDetailUpdt("");
    setTitleUpdt("");
    setGenderUpdt("");
    setUpdateModalIsOpen(false);
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={updateModalIsOpen}
      style={customStyles}
      onRequestClose={closeUpdateModal}>
      <motion.div
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        className="flex flex-col">
        <p className="flex justify-end">
          <AiOutlineCloseCircle
            size="1.5em"
            onClick={() => setUpdateModalIsOpen(false)}
            className="cursor-pointer"
          />
        </p>
        <div className="flex justify-center">
          <Form
            headingName="Update Contact"
            buttonName="Update"
            formHandler={updateHandler}
            name={nameUpdt}
            setName={setNameUpdt}
            email={emailUpdt}
            setEmail={setEmailUpdt}
            number={numberUpdt}
            setNumber={setNumberUpdt}
            detail={detailUpdt}
            setDetail={setDetailUpdt}
            title={titleUpdt}
            setTitle={setTitleUpdt}
            gender={genderUpdt}
            setGender={setGenderUpdt}
          />
        </div>
      </motion.div>
    </Modal>
  );
};
export default UpdateUserModal;
