import React from "react";
import CourseFrame from "./CourseFrame";

function QuarterFrame(props) {
  return (
    <div className="card">
      <h3 className="text-center m-1">{props.quarterName}</h3>
      <hr></hr>
      <div className="card-content">
        {props.courseData.map((course) => {
          return (
            <CourseFrame
              key={course.unique_id}
              courseNumber={course.number}
              courseTitle={course.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default QuarterFrame;

/* <div class="card">
          <h3 class="text-center m-1">Winter 2021</h3>
          <hr></hr>
        </div>
        <div class="card">
          <h3 class="text-center m-1">Spring 2021</h3>
          <hr></hr>
        </div>
      </div>
      <div class="row">
        <div class="card">
          <h3 class="text-center m-1">Fall 2021</h3>
          <hr></hr>
        </div>
        <div class="card">
          <h3 class="text-center m-1">Winter 2022</h3>
          <hr></hr>
        </div>
        <div class="card">
          <h3 class="text-center m-1">Spring 2022</h3>
          <hr></hr>
        </div>
  </div>*/
