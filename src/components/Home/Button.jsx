/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Button = ({ handler, icon, style }) => {
  return (
    <motion.button
      className={style}
      onClick={handler}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}>
      {icon}
    </motion.button>
  );
};
export default Button;
