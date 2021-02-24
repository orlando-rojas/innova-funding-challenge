import Button from "../common/Button";
import Input from "../common/Input";
import React from "react";

export default function FormCreateColumn({ addColumn }) {
  const [newColumnName, setNewColumnName] = React.useState("");

  const handleChange = (e) => setNewColumnName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    addColumn({
      title: newColumnName,
      tasks: [],
    });
  };
  return (
    <div
      className="p-4 w-full bg-white absolute top-0 z-20"
      style={{
        height: "140px",
      }}
    >
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input placeholder={"Type name of list..."} onChange={handleChange} />
        <Button>Create List</Button>
      </form>
    </div>
  );
}
