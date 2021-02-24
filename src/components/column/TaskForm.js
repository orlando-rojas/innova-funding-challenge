import Input from "../common/Input";
import closeIcon from "../../images/x.svg";
import Textarea from "../common/Textarea";
import Comments from "./Comments";
import styled from "styled-components";
import Tags from "./Tags";
import { currentUser } from "../../fakeData";
import React from "react";
export default function TaskForm({ task, close }) {
  const handleDescriptionChange = (e) => {
    task.description = e.target.value;
  };

  const [change, setChange] = React.useState(false);

  const addComment = (newComment) => {
    if (task.comments) task.comments = [...task.comments, newComment];
    else task.comments = [newComment];
  };

  const handleAddComment = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      addComment({ user: currentUser, text: e.target.value });
      setChange(!change);
      e.target.value = "";
    }
  };

  return (
    <div
      className="p-4 w-11/12 bg-white absolute inset-4 left-6 z-20 rounded"
      style={{ height: "fit-content" }}
    >
      <form className="flex flex-col">
        <img
          src={closeIcon}
          alt=""
          height={12}
          width={12}
          className="my-4"
          onClick={close}
        />
        <Input defaultValue={task.title} />
        <Label>Description</Label>
        <Textarea
          placeholder="Type description here"
          defaultValue={task.description}
          onChange={handleDescriptionChange}
        />
        <Tags tags={task.tags} />
        <Label>Comments</Label>
        <Comments comments={task.comments} />
        <Input placeholder="Type comment here" onKeyPress={handleAddComment} />
      </form>
    </div>
  );
}

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;
