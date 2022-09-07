import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animationThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animationThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
