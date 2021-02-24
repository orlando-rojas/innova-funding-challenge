import React from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import Overlay from "../common/Overlay";
import AddTaskBtn from "./AddTaskBtn";
import TaskForm from "./TaskForm";

export default function Column({ column }) {
  const [showTask, setShowTask] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState("");

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    toggleShowTask();
  };

  const toggleShowTask = () => setShowTask(!showTask);

  console.log(selectedTask);
  return (
    <ColumnWrapper className="flex flex-col bg-white rounded p-3 ml-2.5 cursor-pointer h-auto">
      <h1 className="text-grayDark text-sm font-semibold">{column.title}</h1>
      {column.tasks.map((task) => (
        <Task
          key={uuid()}
          className="bg-grayLight p-2 flex items-center mt-2 text-grayDark font-light rounded"
          onClick={() => handleTaskClick(task)}
        >
          {task.title}
        </Task>
      ))}
      <AddTaskBtn />
      {showTask && (
        <Overlay close={() => setShowTask(!showTask)}>
          <TaskForm task={selectedTask} close={toggleShowTask} />
        </Overlay>
      )}
    </ColumnWrapper>
  );
}

const Task = styled.div`
  font-size: 14px;
`;

const ColumnWrapper = styled.div`
  min-width: 200px;
  width: 200px;
`;
