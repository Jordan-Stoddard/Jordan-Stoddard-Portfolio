// This component is a hard-coded project section so that if
// the server is down, the project section of the portfolio
// will not break
import React from "react";

import { ProjectGallery, Project } from "./Projects.style";

const StaticProjectGallery = () => {
  return (
    <ProjectGallery>
      <Project>
        <div className="project-thumbnail">
          <img
            src={require("../../_assets/img/macbook-myHouse.png")}
            alt="myHouse website"
          />
        </div>

        <div className="project-description">
          <h3>TEAM PROJECT</h3>
          <h2>MyHouse</h2>
          <p>
            <span style={{fontStyle: 'italic'}}>Award: First Place at Lambda School Demo Day 2019</span>
            <br />
            <br />
            Coupled with the best machine learning algorithms in real estate
            technology, MyHouse’s data provides homeowners and buyers the most
            accurate decision making information on the market.
            <br /> <br />
            Tech Stack: React, React Hooks, Redux, node-sass, GraphQL, Node.js,
            Postgres and the Amazon Web Services Suite: Amplify, Cognito,
            AppSync, S3, and Elastic Beanstalk.
          </p>

          <div className="btn-group">
            <a
              className="app-btn"
              href="https://www.joinmyhouse.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit
            </a>
            <a
              className="src-btn"
              href="https://github.com/labs12-real-estate/labs12-real-estate-FE"
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </a>
            <a
              className="src-btn"
              href="https://www.youtube.com/watch?v=JgjmJS9FQvo&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
            >
              video
            </a>
          </div>
        </div>
      </Project>

      <Project>
        <div className="column-reverse">
          <div className="project-description">
            <h3>PERSONAL PROJECT</h3>
            <h2>MovieFan</h2>
            <p className="long-description">
              Explore. Discover. Remember.
              <br /> <br />
              MovieFan allows you to browse movies from top rated to upcoming,
              from old favorites to the newest releases.
              <br /> <br />
              Tech stack: React, React Hooks, SASS, axios, bootstrap,
              react-slick.
            </p>

            <div className="btn-group">
              <a
                className="app-btn"
                href="https://moviefanapp.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                visit
              </a>
              <a
                className="src-btn"
                href="https://github.com/Jordan-Stoddard/MovieFan-2.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                code
              </a>
            </div>
          </div>

          <div className="project-thumbnail inverted-thumbnail">
            <img
              src={require("../../_assets/img/macbook-movieFan.png")}
              alt="luncher website"
            />
          </div>
        </div>
      </Project>

      <Project>
        <div className="project-thumbnail">
          <img
            src={require("../../_assets/img/macbook-lambdaNotes.png")}
            alt="lambda notes website"
          />
        </div>

        <div className="project-description">
          <h3>PERSONAL PROJECT</h3>
          <h2>Lambda Notes</h2>
          <p>
            A simple note-taking web application that lets a user create,
            update, delete and display notes.
            <br />
            <br />
            Tech stack: React, Node.js, Postgres, Sqlite3, Express.js, axios.
          </p>

          <div className="btn-group">
            <a
              className="app-btn"
              href="https://jordan-notes.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit
            </a>
            <a
              className="src-btn"
              href="https://github.com/Jordan-Stoddard/front-end-project-week"
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </a>
          </div>
        </div>
      </Project>
    </ProjectGallery>
  );
};

export default StaticProjectGallery;
