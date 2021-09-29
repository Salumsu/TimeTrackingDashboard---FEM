import { createContext, useEffect, useState } from "react";

export const CardDetails = createContext();

const CardDetailsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const data = require("./data.json");
    setCards(data);
  }, []);

  return (
    <CardDetails.Provider value={{ cards }}>{children}</CardDetails.Provider>
  );
};

export default CardDetailsProvider;
