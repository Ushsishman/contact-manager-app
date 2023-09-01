import Label from "./Label";
import Input from "./Input";

/* eslint-disable react/prop-types */
const Form = ({
  formHandler,
  name,
  setName,
  email,
  setEmail,
  number,
  setNumber,
  title,
  setTitle,
  gender,
  setGender,
  detail,
  setDetail,
  headingName,
  buttonName,
}) => {
  const handleOptionChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div className="bg-[#ACD90B] h-fit w-full  flex flex-col items-center justify-center rounded-md ">
      <h3 className="font-bold text-lg mt-3">{headingName}</h3>
      <form onSubmit={formHandler} className="flex flex-col w-3/4">
        <>
          <Label word="Name:" />
          <Input value={name} placeholder="Name" set={setName} type="text" />
        </>
        <>
          <Label word="Email:" />
          <Input
            value={email}
            placeholder="Email"
            set={setEmail}
            type="email"
          />
        </>
        <>
          <Label word="Number:" />
          <Input
            value={number}
            placeholder="Number"
            set={setNumber}
            type="tel"
          />
        </>
        <>
          <Label word="Job Title:" />
          <Input
            value={title}
            placeholder="Job title"
            set={setTitle}
            type="text"
          />
        </>
        <>
          <label className="font-semibold">
            Male:{" "}
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={handleOptionChange}
            />
          </label>
          <label className="font-semibold">
            Female:{" "}
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={handleOptionChange}
            />
          </label>
        </>
        <>
          <Label word="Detail:" />
          <textarea
            required
            className="mt-1 mb-5 rounded-md p-2"
            value={detail}
            placeholder="Add Details..."
            onChange={(e) => setDetail(e.target.value)}></textarea>
        </>
        <button
          type="submit"
          className="py-1 px-3 mb-6 rounded-full bg-white flex justify-center items-center font-semibold text-base">
          {buttonName}
        </button>
      </form>
    </div>
  );
};
export default Form;
