import uuid from "react-uuid";
import Card from "./Card";

export default function CardsList({ boards }) {
  return (
    <div className="flex mt-3 mb-6 overflow-auto -mx-4">
      {boards.map((board) => (
        <Card title={board.title} users={board.users} key={uuid()} />
      ))}
    </div>
  );
}
