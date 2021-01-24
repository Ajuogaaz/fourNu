import React from "react";

function CourseFrame(props) {
  return (
    <div className="course-1">
      <p>{props.courseNumber + " | " + props.courseTitle} </p>
    </div>
  );
}

export default CourseFrame;
