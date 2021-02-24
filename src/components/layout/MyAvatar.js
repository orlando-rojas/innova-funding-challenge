import React from "react";
import styled from "styled-components";
import { getInitials } from "../../utils";
import Logout from "./Logout";
import Overlay from "../common/Overlay";

export default function MyAvatar({ userName, userImg }) {
  const [showLogout, setShowLogout] = React.useState(false);

  console.log(showLogout);
  return (
    <>
      <Avatar
        className="bg-grayLight rounded-full flex items-center justify-center"
        onClick={() => setShowLogout(!showLogout)}
      >
        {!userImg && getInitials(userName)}
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
