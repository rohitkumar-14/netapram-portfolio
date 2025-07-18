import React from "react";
import CountUp from "react-countup";

export default function Counter2({ number, title }) {
  return (
    <div className="number">
      <CountUp duration={10} className="counter" end={number} />
      <span className="fw-bold mx-1">{title}</span>
    </div>
  );
}