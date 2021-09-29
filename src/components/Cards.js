import Card from "./Card";
import { CardDetails } from "../contexts/CardDetails";
import { useContext } from "react";

const Cards = () => {
  const { cards } = useContext(CardDetails);
  return (
    <div className="cards">
      {cards ? (
        cards.map((card) => {
          return <Card data={card} key={card.title} />;
        })
      ) : (
        <h1 className="loading">Error...</h1>
      )}
    </div>
  );
};

export default Cards;
