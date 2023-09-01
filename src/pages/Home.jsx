import Header from "../components/Home/Header";
import Main from "../components/Home/Main";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="min-h-screen w-full px-8 md:px-24 lg:px-24 bg-[#135EF2]">
      {/* HEADER CONTAINS PHONE DIRECTORY,NEW BUTTON AND LOREM */}
      <Header />
      {/* MAIN CONTAINS SEARCH USER INPUT AND MAPPING OF USERS */}
      <Main />
    </motion.div>
  );
};
export default Home;

