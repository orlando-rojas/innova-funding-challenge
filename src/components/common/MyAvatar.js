import styled from "styled-components";
import { getInitials } from "../../utils";

export default function MyAvatar({ userName, userImg }) {
  return (
    <Avatar className="bg-grayLight rounded-full flex items-center justify-center">
      {!userImg && getInitials(userName)}
    </Avatar>
  );
}

const Avatar = styled.div`
  height: 40px;
  width: 40px;
`;
