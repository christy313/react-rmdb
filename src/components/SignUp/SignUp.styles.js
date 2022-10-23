import styled from "styled-components";

export const SignUp = styled.form`
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  text-align: center;
  margin: 100px auto;
  width: 25%;
  padding: 50px;
  color: #666;
  font-size: 24px;
`;

export const SignUpTitle = styled.div`
  padding: 5px;
  margin-bottom: 10px;
  font-size: 30px;
`;

export const InputWrapper = styled.div`
  padding: 10px;
  & + & {
    margin-top: 10px;
  }
`;

export const Username = styled.input`
  padding: 4px;
`;

export const Nickname = styled.input`
  padding: 4px;
`;

export const Password = styled.input`
  padding: 4px;
`;

export const Button = styled.button`
  padding: 8px;
  margin-top: 18px;
  border-radius: 3px;
  font-size: 16px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 30px;
`;
