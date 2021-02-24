import CardsList from "./card/CardsList";
import { cardsExample, currentUser } from "../dataExample";
import React from "react";
import SectionTitle from "./common/SectionTitle";

export default function Home() {
  const [cards] = React.useState(cardsExample);

  return (
    <div className="mt-8">
      <div>
        <SectionTitle>My Boards</SectionTitle>
        <CardsList
          cards={cards.filter((card) => card.users.includes(currentUser))}
        />
      </div>
      <div>
        <SectionTitle>Other Boards</SectionTitle>
        <CardsList
          cards={cards.filter((card) => !card.users.includes(currentUser))}
        />
      </div>
    </div>
  );
}
