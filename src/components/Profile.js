import Icon from "./Icon";
import { TimeFrame } from "../contexts/TimeFrame";
import { useContext } from "react";
import { CardDetails } from "../contexts/CardDetails";

const Profile = () => {
  const { time, changeTime } = useContext(TimeFrame);
  const { cards } = useContext(CardDetails);
  return (
    <div className="container">
      <div id="profile">
        <Icon />
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </div>
      <div id="menu" className={cards ? "" : "empty"}>
        <ul>
          <li
            className={time === "Daily" ? "active" : ""}
            onClick={() => changeTime("Daily")}
          >
            Daily
          </li>
          <li
            className={time === "Weekly" ? "active" : ""}
            onClick={() => changeTime("Weekly")}
          >
            Weekly
          </li>
          <li
            className={time === "Monthly" ? "active" : ""}
            onClick={() => changeTime("Monthly")}
          >
            Monthly
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
