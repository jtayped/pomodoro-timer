import "./tasks.css";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DeleteOutline } from "@mui/icons-material";

const Tasks = () => {
  const inputRef = useRef();
  const [taskList, setTaskList] = useState([]);

  function handleTaskAdd() {
    const task = inputRef.current.value;
    if (task.length > 0) {
      setTaskList([
        ...taskList,
        {
          id: taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 1,
          title: task,
        },
      ]);
      inputRef.current.value = "";
      console.log(taskList);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleTaskAdd();
    }
  }

  function handleTaskRemove(id) {
    const index = taskList.findIndex((task) => task.id === id);
    setTaskList((taskList) => {
      return taskList
        .slice(0, index)
        .concat(taskList.slice(index + 1))
        .map((task, i) => ({ ...task, id: i + 1 }));
    });
  }

  return (
    <div className="tasks">
      <div className="task-input">
        <input
          type="text"
          placeholder="What do you need to do?"
          ref={inputRef}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleTaskAdd}>Add</button>
      </div>

      <ul>
        <AnimatePresence>
          {taskList.map((task, index) => (
            <motion.li
              key={index}
              className="task-item"
              initial={{ scale: 0, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              layout
            >
              <button onClick={() => handleTaskRemove(task.id)}>
                <DeleteOutline className="delete-button" />
              </button>
              <h3>{task.title}</h3>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Tasks;
