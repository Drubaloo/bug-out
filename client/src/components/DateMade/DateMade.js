import React from "react";
import "./DateMade.css";

function DateMade() {
  var tempDate = new Date();
  var date =
    tempDate.getMonth() +
    1 +
    "-" +
    tempDate.getDate() +
    "-" +
    tempDate.getFullYear();

  return (
    <div className="date">
      Date Submitted : <span id="date">{date}</span>{" "}
    </div>
  );
}

export default DateMade;
