import React from "react";
import UserAvatar from "../user-avatar/UserAvatar";
import uuid from "react-uuid";

export default function Comments({ comments }) {
  return (
    <div className="my-1">
      {comments.map((comment) => (
        <div className="flex items-center py-2" key={uuid()}>
          <UserAvatar user={comment.user} />
          <p className="ml-2">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
