import { useContext } from "react";
import { TimeFrame } from "../contexts/TimeFrame";
import elipse from "./../images/icon-ellipsis.svg";

const Card = ({ data }) => {
  const { time } = useContext(TimeFrame);
  return (
    <div className="card">
      <div
        className={`${
          data.title === "Self Care" ? "Self-Care" : data.title
        } background`}
      ></div>
      <div className="card-details">
        <p>{data.title}</p>
        <img src={elipse} alt="..." />
        {time === "Daily" ? (
          <>
            <h2>
              {data.timeframes.daily.current}
              {data.timeframes.daily.previous > 1 ? "hrs" : "hr"}
            </h2>
            <h4>
              Last Day - {data.timeframes.daily.previous}
              {data.timeframes.daily.previous > 1 ? "hrs" : "hr"}
            </h4>
          </>
        ) : time === "Weekly" ? (
          <>
            <h2>
              {data.timeframes.weekly.current}
              {data.timeframes.weekly.previous > 1 ? "hrs" : "hr"}
            </h2>
            <h4>
              Last Week - {data.timeframes.weekly.previous}
              {data.timeframes.weekly.previous > 1 ? "hrs" : "hr"}
            </h4>
          </>
        ) : (
          <>
            <h2>
              {data.timeframes.monthly.current}
              {data.timeframes.monthly.previous > 1 ? "hrs" : "hr"}
            </h2>
            <h4>
              Last Month - {data.timeframes.monthly.previous}
              {data.timeframes.monthly.previous > 1 ? "hrs" : "hr"}
            </h4>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
