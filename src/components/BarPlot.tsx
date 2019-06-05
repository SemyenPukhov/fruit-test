import React from "react";
import "../assets/styles/bar-plot.css";
const BarPlot = (props: any) => {
  const { fruitName, total, onBarClick, selected } = props;
  const width = total + "%";
  return (
    <div className="bar-plot-wrapper" onClick={onBarClick}>
      <span className="fruit-name">{fruitName}</span>
      <div className={selected === fruitName ? "plot selected" : "plot"}>
        <div
          className={selected === fruitName ? "bar selected" : "bar"}
          style={{ width: width }}
        />
      </div>
      <span className="total">{total}</span>
    </div>
  );
};

export default BarPlot;
