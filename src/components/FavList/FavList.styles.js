import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px;
  display: flex;
`;

export const Title = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;

export const Button = styled.button`
  background: var(--darkGrey);
  min-width: 80px;
  line-height: 1.2em;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontSmall);
  transition: all 0.3s;
  outline: none;
  text-align: center;

  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
