import React from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import Input from "../common/Input";
import Overlay from "../common/Overlay";
import BtnAddTask from "./BtnAddTask";
import TaskForm from "./TaskForm";

export default function Column({ column }) {
  const [showTask, setShowTask] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState("");
  const [showNewTask, setShowNewTask] = React.useState(false);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    toggleShowTask();
  };

  const toggleShowTask = () => setShowTask(!showTask);

  const addTask = (newTask) => (column.tasks = [...column.tasks, newTask]);

  const handleCreateTask = (e) => {
    if (e.key === "Enter") {
      addTask({ title: e.target.value });
      setShowNewTask(!showNewTask);
    }
  };

  return (
    <ColumnWrapper
      className="flex flex-col bg-white rounded p-3 mr-1.5"
      style={{ height: "fit-content" }}
    >
      <h1 className="text-grayDark text-sm font-semibold">{column.title}</h1>
      <div className="h-auto">
        <div className="mb-2">
          {column.tasks.map((task) => (
            <Task
              key={uuid()}
              className="bg-grayLight p-2 flex items-center mt-2 text-grayDark font-light rounded cursor-pointer"
              onClick={() => handleTaskClick(task)}
            >
              {task.title}
            </Task>
          ))}
        </div>
        {showNewTask && (
          <Input
            style={{ height: "20px", maxWidth: "100%" }}
            onKeyPress={handleCreateTask}
          />
        )}
        <BtnAddTask onClick={() => setShowNewTask(!showNewTask)} />
      </div>

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
