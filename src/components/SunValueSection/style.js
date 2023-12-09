import styled from "styled-components";

export const StyledSection = styled.section`
  flex-direction: column;
  width: 17.5rem;
  height: 6rem;
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  margin-top: 1rem;
  margin-bottom: 1rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    color: #fd377e;
  }
`;
