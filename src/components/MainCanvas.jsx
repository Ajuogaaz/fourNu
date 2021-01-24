import React from "react";
import quarters from "../mainData";
import QuarterFrame from "./QuarterFrame";

function MainCanvas() {
  return (
    <div className="semester-grid">
      <div className="row">
        {quarters.map((quarter) => {
          return (
            <QuarterFrame
              key={quarter.key}
              quarterName={quarter.period + " " + quarter.year}
              courseData={quarter.courses}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainCanvas;
