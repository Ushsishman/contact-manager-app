import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import { useState } from "react";
import { motion } from "framer-motion";

const Main = () => {
  const users = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");

  {
    /* ANIMATIONS */
  }
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Contact"
        className="w-72 border border-gray-300 my-6 py-1 pl-3 pr-2 rounded-full"
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {users.length > 0 ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-y-1 gap-x-6">
          {/* THIS FILTERS THE USERS IF YOU SEARCH FOR USER AND MAPS */}
          {users
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => {
              return (
                <UserItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  number={item.number}
                  email={item.email}
                  title={item.title}
                  detail={item.detail}
                  gender={item.gender}
                />
              );
            })}
        </motion.div>
      ) : (
        <div className="flex items-center justify-center">
          <p className="font-semibold text-xl text-[#fff]">No contact added</p>
        </div>
      )}
    </div>
  );
};

export default Main;
