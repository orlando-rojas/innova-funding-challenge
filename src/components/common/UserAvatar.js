import styled from "styled-components";
import { avatarSizes } from "../../constants";

export default function UserAvatar({ userName, userImg, size = "small" }) {
  return (
    <Avatar
      className="bg-grayLight rounded-full flex items-center justify-center mr-1"
      size={avatarSizes[size]}
    >
      {!userImg && getInitials(userName)}
    </Avatar>
  );
}

function getInitials(fullname) {
  return fullname
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();
}

const Avatar = styled.div`
  background-color: ${(props) => props.bg};
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;
