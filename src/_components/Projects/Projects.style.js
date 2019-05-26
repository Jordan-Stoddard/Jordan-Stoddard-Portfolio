import styled from "styled-components";
import { flex } from "../../_styles/mixins.style";
import {
  colors,
  buttonDark,
  buttonLight,
  headingStyle
} from "../../_styles/variables.style";

export const ProjectContainer = styled.section`
  padding-top: 8rem;

  h1 {
    margin-bottom: 3rem;
    ${headingStyle}
  }

  p {
    font-size: 2.5rem;
    color: ${colors.blackRegular};
    letter-spacing: 0.05rem;
    line-height: 3.5rem;

    @media (max-width: 755px) {
      font-size: 2.3rem;
      line-height: 3rem;
    }

    @media (max-width: 711px) {
      font-size: 2rem;
      line-height: 3rem;
    }

    a {
      border-bottom: 0.1rem solid ${colors.blackLight};
      transition: 150ms ease-in;

      &:hover {
        border-bottom: 0.1rem solid ${colors.redRegular};
        color: ${colors.redRegular};
      }
    }
  }
`;

export const ProjectGallery = styled.div`
  margin: 4rem 0;
`;

export const Project = styled.section`
  ${flex()}
  margin-bottom: 12rem;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

  .column-reverse {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;

    @media (max-width: 900px) {
      flex-direction: column-reverse;
    }
  }

  /* screenshot of the project application */
  .project-thumbnail {
    width: 50%;
    @media (max-width: 900px) {
      width: 100%;
      margin-bottom: 40px;
    }

    @media (max-width: 610px) {
    }

    img {
      width: 95%;
      height: auto;
    }
  }

  .inverted-thumbnail {
    text-align: right;
  }

  .project-description {
    width: 50%;

    @media (max-width: 900px) {
      width: 100%;
    }

    /* project team category */
    h3 {
      font-size: 1.8rem;
      letter-spacing: 0.2rem;
      line-height: 2.5rem;
      color: ${colors.blackLight};

      @media (max-width: 755px) {
        font-size: 1.6rem;
        line-height: 2rem;
      }

      @media (max-width: 610px) {
        font-size: 1.5rem;
      }

      @media (max-width: 400px) {
        font-size: 1.4rem;
      }
    }

    /* project title */
    h2 {
      margin-bottom: 1rem;
      font-size: 3.5rem;
      font-weight: 700;
      color: ${colors.blackRegular};

      @media (max-width: 755px) {
        font-size: 2.5rem;
        line-height: 3rem;
      }
    }

    /* project mini description */
    p {
      font-size: 1.8rem;
      line-height: 3rem;
      color: ${colors.blackLight};
      margin-bottom: 3.5rem;

      @media (max-width: 900px) {
        width: 100%;
      }

      @media (max-width: 610px) {
      }

      @media (max-width: 390px) {
      }
    }

    .long-description {
      height: 100%;

      @media (max-width: 1111px) {
      }

      @media (max-width: 610px) {
      }

      @media (max-width: 444px) {
      }

      @media (max-width: 345px) {
      }
    }

    .btn-group {
      position: relative;
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
      z-index: 1;

      a {
        margin-right: 3rem;
        transition: 150ms ease-in;

        @media (max-width: 755px) {
          margin-right: 2rem;
        }
      }

      /* View button */
      .app-btn {
        ${buttonDark}
        padding-left: 3.8rem;
        padding-right: 3.8rem;

        @media (max-width: 755px) {
          padding: 0.5rem 2.8rem;
        }
      }

      /* Source button */
      .src-btn {
        ${buttonLight}

        @media (max-width: 755px) {
          padding: 0.5rem 1.8rem;
        }
      }
    }

    /* minions illustrations */
    .minions {
      text-align: right;
      img {
        width: 65%;
        height: auto;
      }
      @media (max-width: 900px) {
        display: none;
      }
    }
  }
`;
