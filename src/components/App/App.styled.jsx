import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  font-size: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid black;
`;

export const LabelName = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const LabelNumber = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
`;

export const InputName = styled.input`
  margin-top: 10px;
`;

export const InputNumber = styled.input`
  margin-top: 10px;
`;

export const InputFilter = styled.input`
  margin-top: 10px;
  /* padding: 0; */
  width: 200px;
  &:focus-visible {
    outline-offset: 0;
  }
  &::-webkit-search-cancel-button {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 100px;
  margin-top: 10px;
`;

export const SubTitle = styled.h2`
  font-size: 22px;
`;
