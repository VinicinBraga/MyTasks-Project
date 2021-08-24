import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id} //Sempre que fizer um 'map' é interessante usar um 'key' + o id que é aleatorio
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  );
};

export default Tasks;
