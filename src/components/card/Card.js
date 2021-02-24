import styled from "styled-components";
import UsersAvatarList from "../user-avatar/UserAvatarList";

export default function Card({ title, users }) {
  return (
    <CardWrapper className="flex flex-col justify-between bg-white rounded p-3 ml-2.5">
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
