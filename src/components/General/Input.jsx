/* eslint-disable react/prop-types */
const Input = ({ value, placeholder, set, type }) => {
  return (
    <input
      required
      className="p-2 rounded my-1"
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(e) => set(e.target.value)}
    />
  );
};
export default Input;
