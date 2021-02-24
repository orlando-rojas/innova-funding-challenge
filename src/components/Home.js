import CardsList from "./common/CardsList";
import { cardsExample } from "./common/usersExample";

export default function Home() {
  return (
    <div className="mt-8">
      <div>
        <SectionTitle>My Boards</SectionTitle>
        <CardsList cards={cardsExample} />
      </div>
      <div>
        <SectionTitle>Other Boards</SectionTitle>
        <CardsList cards={cardsExample.filter((card) => card.other)} />
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return <h2 className="text-white text-2xl font-bold">{children}</h2>;
}
