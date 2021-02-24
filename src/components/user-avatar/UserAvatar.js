import styled from "styled-components";
import { getInitials } from "../../utils";

export default function UserAvatar({ user }) {
  return (
    <Avatar
      className="bg-grayLight rounded-full flex items-center justify-center mr-1"
      avatarImg={user.imgUrl}
    >
      {!user.imgUrl && getInitials(user.name)}
    </Avatar>
  );
}

const Avatar = styled.div`
  height: 30px;
  width: 30px;
  background-image: url(${(props) => props.avatarImg});
  background-size: cover;
`;
