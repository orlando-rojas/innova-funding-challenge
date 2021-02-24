import styled from "styled-components";
import { getInitials } from "../../utils";

export default function UserAvatar({ userName, userImg }) {
  return (
    <Avatar className="bg-grayLight rounded-full flex items-center justify-center mr-1">
      {!userImg && getInitials(userName)}
    </Avatar>
  );
}

const Avatar = styled.div`
  height: 30px;
  width: 30px;
`;
