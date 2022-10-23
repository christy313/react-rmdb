import styled from "styled-components";

export const Login = styled.form`
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  margin: 100px auto;
  text-align: center;
  width: 25%;
  padding: 50px;
  color: #666;
  font-size: 24px;
`;

export const LoginTitle = styled.div`
  font-size: 30px;
  display: block;
`;

export const InputWrapper = styled.div`
  padding: 10px;
  & + & {
    margin-top: 10px;
  }
`;

export const Username = styled.input`
  padding: 4px;
  margin-top: 20px;
`;

export const Password = styled.input`
  padding: 4px;
  margin-top: 20px;
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
