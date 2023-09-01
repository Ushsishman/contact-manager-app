import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const addUserHandler = () => {
    navigate("/addUser");
  };

  return (
    <>
      <div className="flex flex-row items-baseline">
        <h1 className="font-semibold text-2xl my-2.5 text-white">
          Phone Directory
        </h1>
        <button
          onClick={addUserHandler}
          className="bg-[#fff] text-black py-1 px-3 mx-2 rounded-full font-semibold">
          New
        </button>
      </div>
      <div>
        <p className="italic text-[#ececec]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          amet, corporis numquam voluptatum facilis aspernatur porro ullam
          laborum recusandae dignissimos!
        </p>
      </div>
    </>
  );
};
export default Header;
