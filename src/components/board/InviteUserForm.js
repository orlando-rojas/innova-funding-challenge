import Button from "../common/Button";
import Input from "../common/Input";
import React from "react";
import { usersExample } from "../../fakeData";
import styled from "styled-components";

export default function InviteUserForm({ addUserToBoard, boardUsers, close }) {
  const [error, setError] = React.useState("");
  const [newUser, setNewUser] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser !== "") {
      let user = usersExample.find((user) => user.email === newUser);
      if (user) {
        if (boardUsers.includes(user)) {
          setError("este usuario ya esta en el board");
        } else {
          addUserToBoard(user);
          setError("");
          close();
        }
      } else setError("usuario no encontrado");
    }
  };

  return (
    <div
      className="p-4 w-full bg-white absolute top-0 z-20 "
      style={{
        height: "fit-content",
      }}
    >
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input
          placeholder={"yefrioscar9814@gmail.com"}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <Error>{error}</Error>
        <Button>Send Invitation</Button>
      </form>
    </div>
  );
}

const Error = styled.span`
  color: red;
`;
