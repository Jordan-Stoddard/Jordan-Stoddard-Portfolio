import styled from "styled-components";
import { flex } from "../../_styles/mixins.style";
import { colors, headingStyle } from "../../_styles/variables.style";

export const AboutContainer = styled.section`
  ${flex("space-between", "center")}
  margin-top: 150px;
  margin-bottom: 150px;

  @media (max-width: 700px) {
    height: 100vh;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 170px;
  }
`;

export const AboutHeadline = styled.div`
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
  }

  h1 {
    margin-bottom: 4rem;
    ${headingStyle}
    @media (max-width: 900px) {
      font-size: 5rem;
      line-height: 5rem;
      text-align: left;
    }
  }

  p {
    color: ${colors.blackRegular};
    letter-spacing: 0.05rem;
  }

  .main-headline {
    margin-bottom: 5rem;
    font-size: 1.8rem;
    line-height: 3rem;

    @media (max-width: 1200px) {
      font-size: 1.8rem;
      line-height: 3rem;
    }

    @media (max-width: 900px) {
      font-size: 1.8rem;
      line-height: 3rem;
      text-align: left;
    }

    @media (max-width: 711px) {
      font-size: 1.8rem;
      line-height: 3rem;
    }
  }

  .secondary-headline {
    font-size: 2.5rem;
    line-height: 4rem;
    color: ${colors.blackLight};

    @media (max-width: 1200px) {
      font-size: 2rem;
      line-height: 3rem;
    }

    @media (max-width: 885px) {
      font-size: 1.8rem;
    }

    a {
      border-bottom: 0.1rem solid ${colors.blackLight};
      color: ${colors.blackLight};
      transition: 150ms ease-in;

      &:hover {
        border-bottom: 0.1rem solid ${colors.redRegular};
        color: ${colors.redRegular};
      }
    }
  }
`;

export const AboutImage = styled.div`
  width: 50%;
  text-align: right;

  @media (max-width: 650px) {
    width: 90%;
    text-align: center;
  }

  @media (max-width: 900px) {
    width: 90%;
    text-align: center;
  }

  img {
    width: 75%;
    height: auto;
    border-radius: 50px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`;
