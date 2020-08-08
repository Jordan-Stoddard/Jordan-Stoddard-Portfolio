import React from "react";
import { AboutContainer, AboutHeadline, AboutImage } from "./About.style";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutHeadline>
        <h1>Hello World.</h1>
        <p className="main-headline">
          Jordan Stoddard is a Technical Product Manager with a background in pure software engineering roles and 10 years experience
          in Project Management and Growth. <br /> In his previous career, he had
          the opportunity to lead teams of 35+ and manage projects for some of
          the largest and well known companies in the world such as:
          <br />
          <br /> Google, Bank of America, VMWare, Stanford University, IBM,
          Greylock Realty Partners and many others.
        </p>
      </AboutHeadline>

      <AboutImage>
        <img
          src={require("../../_assets/img/jordan-headshot.jpg")}
          alt="girl-sitting"
        />
      </AboutImage>
    </AboutContainer>
  );
};

export { About };
