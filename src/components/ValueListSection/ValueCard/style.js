import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  height: 9.75rem;
  padding: 1rem;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background: #f8f9fa;
  border-radius: 4px;

  button {
    width: 48px;
    height: 19;
    background: #e9ecef;
    border-radius: 2px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #212529;
  }

  @media (min-width: 1000px) {
    div {
      position: relative;
    }
    .valor {
      position: absolute;
      right: 0px;
      top: 15px;
    }
    .tipoValor {
      top: 45px;
    }
    button {
      position: absolute;
      right: 0px;
      top: 45px;
    }
  }
`;
