import uuid from "react-uuid";
import Card from "./Card";

export default function CardsList({ cards }) {
  return (
    <div className="flex mt-3 mb-6 overflow-auto -mx-4">
      {cards.map((card) => (
        <Card title={card.title} users={card.users} key={uuid()} />
      ))}
    </div>
  );
}
