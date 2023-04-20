import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Experience.css";
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="yellowgreen">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2021"
          iconStyle={{ background: "yellowgreen", color: "black" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jaivabai Girls High School
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2021"
          iconStyle={{ background: "yellowgreen", color: "black" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Diploma In Computer Teacher Training
          </h3>
          <p>Angel Computer Center</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2023"
          iconStyle={{ background: "yellowgreen", color: "black" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sri krishna College of Engineering and Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree,Second Year
          </h4>
          <p>Electronics and Communication Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
