import React from "react";
import { CgClose } from "react-icons/cg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="see-task-detail-button"
          onClick={handleTaskDetailsClick}
        >
          <AiOutlineInfoCircle />
        </button>
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
