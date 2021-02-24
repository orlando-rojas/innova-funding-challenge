import React from "react";
import styled from "styled-components";
import { getInitials } from "../../utils";
import Logout from "./Logout";
import Overlay from "../common/Overlay";

export default function MyAvatar({ user }) {
  const [showLogout, setShowLogout] = React.useState(false);

  return (
    <>
      <Avatar
        className="bg-grayLight rounded-full flex items-center justify-center text-purpleDark cursor-pointer"
        onClick={() => setShowLogout(!showLogout)}
        avatarImg={user.imgUrl}
      >
        {getInitials(user.name)}
      </Avatar>
      {showLogout && (
        <Overlay close={() => setShowLogout(!showLogout)}>
          <Logout />
        </Overlay>
      )}
    </>
  );
}

const Avatar = styled.div`
  height: 40px;
  width: 40px;
`;
