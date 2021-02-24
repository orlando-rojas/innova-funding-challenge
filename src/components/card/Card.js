import { useHistory } from "react-router";
import styled from "styled-components";
import UsersAvatarList from "../user-avatar/UserAvatarList";

export default function Card({ title, users }) {
  const history = useHistory();
  return (
    <CardWrapper
      className="flex flex-col justify-between bg-white rounded p-3 ml-2.5 cursor-pointer"
      onClick={() => history.push("/board")}
    >
      <h1 className="text-gray text-3xl font-bold">{title}</h1>
      <UsersAvatarList users={users} />
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  height: 155px;
  min-width: 155px;
  width: 155px;
`;
