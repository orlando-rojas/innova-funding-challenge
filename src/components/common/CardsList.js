import uuid from "react-uuid";
import Card from "./Card";
import { usersExample } from "./usersExample";

export default function CardsList({ cards }) {
  return (
    <div className="flex mt-3 mb-6">
      {cards.map((card) => (
        <Card title={card.title} users={usersExample} key={uuid()} />
      ))}
    </div>
  );
}
