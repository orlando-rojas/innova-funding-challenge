import React from "react";
import { boardExample, columnsExample, usersExample } from "../../fakeData";
import SectionTitle from "../common/SectionTitle";
import Overlay from "../common/Overlay";
import InviteUserForm from "./InviteUserForm";
import UsersAvatarList from "../user-avatar/UserAvatarList";
import AddUserBtn from "./AddUserBtn";
import ColumnsList from "../column/ColumnsList";
import AddColumnBtn from "./AddColumnBtn";
import CreateListform from "./CreateListForm";

export default function Board() {
  const [board] = React.useState(boardExample);
  const [showInviteUser, setShowInviteUser] = React.useState(false);
  const [showCreateList, setShowCreateList] = React.useState(false);
  const [columns] = React.useState(columnsExample);

  const toggleCreateList = () => setShowCreateList(!showCreateList);
  const toggleInviteUser = () => setShowInviteUser(!showInviteUser);

  return (
    <div className="mt-8">
      <SectionTitle>{board.title}</SectionTitle>
      <div className="flex mt-4">
        <AddUserBtn onClick={toggleInviteUser} />
        <UsersAvatarList users={usersExample} />
      </div>
      <div className="flex mt-6">
        <AddColumnBtn onClick={toggleCreateList} />
        <ColumnsList columns={columns} />
      </div>

      {showInviteUser && (
        <Overlay close={toggleInviteUser}>
          <InviteUserForm />
        </Overlay>
      )}
      {showCreateList && (
        <Overlay close={toggleCreateList}>
          <CreateListform />
        </Overlay>
      )}
    </div>
  );
}
