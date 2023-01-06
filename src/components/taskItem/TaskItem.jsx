import "./taskItem.css";
import React, { useEffect } from "react";
import Bin from "../../assets/icons/bin.svg";
import { motion, AnimatePresence } from "framer-motion";

const TaskItem = (props) => {
  function handleCheckboxChange(event) {
    console.log(props.id);
    props.onTaskRemove(props.id);
  }


  return (
    <AnimatePresence>
      <motion.li
      layout
        className="task-item"
        initial={{ scale: 0, opacity: 0, y: -10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <button onClick={handleCheckboxChange}>
          <img src={Bin} alt="" />
        </button>
        <h3>{props.title}</h3>
      </motion.li>
    </AnimatePresence>
  );
};

export default TaskItem;
