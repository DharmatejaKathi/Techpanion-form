import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  border-left-width: 2px solid black;
`;

export const FormSection = styled.form`
  padding: 20px;
  width: 100%;
`;

export const Label = styled.label`
  color: black;
  font-size: 16px;
  font-family: "Roboto";
  width: 30%;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 3px;
  height: 26px;
  border: 1.3px solid;
  outline: none;
`;
export const InputContainer = styled.div`
  display: flex;
`;

export const FormTitle = styled.p`
  width: 100%;
  background-color: #d5ccda;
  padding: 6px;
  color: #a759d1;
  font-weight: 501px;
`;

export const WrapContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 80vh;
`;
