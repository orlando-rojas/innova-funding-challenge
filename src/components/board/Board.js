import React from "react";
import { boardExample } from "../../fakeData";
import SectionTitle from "../common/SectionTitle";
import Overlay from "../common/Overlay";
import FormInviteUser from "./FormInviteUser";
import UsersAvatarList from "../user-avatar/UserAvatarList";
import BtnAddUser from "./BtnAddUser";
import ColumnsList from "../column/ColumnsList";
import BtnAddColumn from "./BtnAddColumn";
import FormCreateColumn from "./FormCreateColumn";

export default function Board() {
  const [board] = React.useState(boardExample);
  const [showInviteUser, setShowInviteUser] = React.useState(false);
  const [showCreateList, setShowCreateList] = React.useState(false);

  const toggleCreateList = () => setShowCreateList(!showCreateList);
  const toggleInviteUser = () => setShowInviteUser(!showInviteUser);

  const addUserToBoard = (newUser) => (board.users = [newUser, ...board.users]);

  const addColumn = (newColumn) => {
    board.columns = [newColumn, ...board.columns];
    toggleCreateList();
  };

  return (
    <div className="mt-8">
      <SectionTitle>{board.title}</SectionTitle>
      <div className="flex mt-4">
        <BtnAddUser onClick={toggleInviteUser} />
        <UsersAvatarList users={board.users} />
      </div>
      <div className="flex mt-6">
        <BtnAddColumn onClick={toggleCreateList} />
        <ColumnsList columns={board.columns} />
      </div>

      {showInviteUser && (
        <Overlay close={toggleInviteUser}>
          <FormInviteUser
            addUserToBoard={addUserToBoard}
            boardUsers={board.users}
            close={toggleInviteUser}
          />
        </Overlay>
      )}
      {showCreateList && (
        <Overlay close={toggleCreateList}>
          <FormCreateColumn addColumn={addColumn} />
        </Overlay>
      )}
    </div>
  );
}
