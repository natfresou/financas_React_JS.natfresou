import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 17.5rem;
  height: 9.75rem;
  gap: 0.8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  h2 {
    margin-top: 2rem;
  }

  .greenBord {
    border-left: 4px solid #03b898;
  }

  .grayBord {
    border-left: 4px solid #e9ecef;
  }

  @media (min-width: 1000px) {
    li {
      width: 560px;
      height: 87px;
    }
  }
  @media (min-width: 1000px) {
    ul {
      width: 560px;
      height: 87px;
    }
  }
`;
