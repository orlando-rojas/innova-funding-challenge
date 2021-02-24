import UserAvatar from "./UserAvatar";
import uuid from "react-uuid";

export default function UsersAvatarList({ users }) {
  return (
    <div className="flex ">
      {users.map((user) => (
        <UserAvatar userName={user.name} key={uuid()} />
      ))}
    </div>
  );
}
