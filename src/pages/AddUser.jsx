import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userReducer";
import { useNavigate } from "react-router-dom";
import Form from "../components/General/Form";
import { motion } from "framer-motion";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        name: name,
        email: email,
        id: Math.floor(Math.random() * 9999),
        number: number,
        title: title,
        detail: detail,
        gender: gender,
      }),
    );
    navigate("/");
  };
  {
    /* ADD USER PAGE,YOU CAN SEE THIS WITH CLICKING ADD CONTACT */
  }
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      className="h-screen w-full flex justify-center items-center bg-[#135EF2]">
      <motion.div
        initial={{ translateX: "-100%" }}
        animate={{ translateX: 0 }}
        className="w-96">
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          number={number}
          setNumber={setNumber}
          detail={detail}
          setDetail={setDetail}
          title={title}
          setTitle={setTitle}
          gender={gender}
          setGender={setGender}
          formHandler={submitHandler}
          headingName="Add Contact"
          buttonName="Add"
        />
      </motion.div>
    </motion.div>
  );
};
export default AddUser;
