import React from "react";
import { FooterContainer, FooterWrapper } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div className="footer-links">
          <nav>
            <a
              href="https://twitter.com/Jdogstoddard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>

            <a
              href="https://www.linkedin.com/in/jordan-stoddard-aa928167/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Jordan-Stoddard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>

            <a href="mailto:jordan.j.stoddard@gmail.com">Email</a>
          </nav>
        </div>

        <div className="copyright-text">
          <p>
            &copy; 2019{" "}
            <a
              href="https://github.com/Jordan-Stoddard/Jordan-Stoddard-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jordan Stoddard
            </a>
          </p>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export { Footer };
