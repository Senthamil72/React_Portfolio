import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import img from "../assests/pngwing.png";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={img} alt="/" style={{ width: "150px" }}></img>
        <div className="img"></div>
        <h2>Hi,My Name is SenthamilSelvi!</h2>
        <div className="prompt">
          <p>
            An Engineering student with a passion for learning and creating.
          </p>
          <a
            href="https://www.linkedin.com/in/senthamil-selvi-205919265"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://mail.google.com/mail/u/1/#inbox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
          <a
            href="https://github.com/Senthamil72"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <hr size="100px" color="yellowgreen"></hr>
        </div>
      </div>

      <div className="skills" style={{ color: "black" }}>
        <h1>Skills</h1>
        <ol className="list">
          <li className="item" style={{ color: "black" }}>
            <h2>Front-End</h2>
            <span>
              ReactJS,HTML, CSS, React Native, NPM, BootStrap,
              MaterialUI,StyledComponents
            </span>
          </li>
          <li className="item" style={{ color: "black" }}>
            <h2>Languages</h2>
            <span>JavaScript, Java, C, C++,</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
