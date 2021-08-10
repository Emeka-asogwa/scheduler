import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected, "day-list__item--full": props.spots === 0,
  });
  const formatSpots = () => {
    const spots = props.spots;
    let spotMessage;
    if (spots === 0) {
      spotMessage = "no spots remaining";
    } else if (spots === 1) {
      spotMessage = "1 spot remaining";
    } else if (spots > 1) {
      spotMessage = `${spots} spots remaining`
    }
    return spotMessage;
  }

  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      {/* <h3 className="text--light">{props.spots}</h3> */}
      <h3 className="text--light">{formatSpots()}</h3>

    </li>
  );
}