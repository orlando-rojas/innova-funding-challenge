import CardsList from "./card/CardsList";
import { boardsExample, currentUser } from "../fakeData";
import React from "react";
import SectionTitle from "./common/SectionTitle";

export default function Home() {
  const [boards] = React.useState(boardsExample);

  return (
    <div className="mt-8">
      <div>
        <SectionTitle>My Boards</SectionTitle>
        <CardsList
          boards={boards.filter((board) => board.users.includes(currentUser))}
        />
      </div>
      <div>
        <SectionTitle>Other Boards</SectionTitle>
        <CardsList
          boards={boards.filter((board) => !board.users.includes(currentUser))}
        />
      </div>
    </div>
  );
}
