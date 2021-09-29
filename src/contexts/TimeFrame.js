import { useState } from "react";
import { createContext } from "react";

export const TimeFrame = createContext();

const TimeFrameProvider = ({ children }) => {
  const [time, setTime] = useState("Daily");

  const changeTime = (time) => {
    setTime(time);
  };
  return (
    <TimeFrame.Provider value={{ time, changeTime }}>
      {children}
    </TimeFrame.Provider>
  );
};

export default TimeFrameProvider;
