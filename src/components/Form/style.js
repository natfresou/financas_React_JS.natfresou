import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 17.5rem;
  height: 27.125rem;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);

  h5 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  span {
    font-family: var(--Font-secundary);
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    margin-top: 0.5rem;
    color: #343a40;
  }

  input {
    width: calc(100%-2rem);
    height: 2.875rem;
    background-color: #f8f9fa;
    padding: 0 1rem;
    font-family: var(--Font-secundary);
    font-weight: 400;
    font-size: 1rem;
    border: 2px solid #f8f9fa;
    border-radius: 8px;
  }
  select {
    width: calc(100%-2rem);
    height: 2.875rem;
    background-color: #f8f9fa;
    padding: 0 1rem;
    font-family: var(--Font-secundary);
    font-weight: 400;
    font-size: 0.75rem;
    border: 2px solid #f8f9fa;
    border-radius: 8px;
    color: #343a40;
  }

  button {
    width: calc(100%-2rem);
    height: 2.875rem;
    background-color: var(--Color-pink1);
    display: flex;
    justify-content: center;
    font-family: var(--Font-secundary);
    font-weight: 500;
    font-size: 1rem;
    color: white;
    border: 2px solid #fd377e;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0.8rem;
  }
`;
