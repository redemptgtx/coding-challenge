import styled from "styled-components";

const TextInput = styled.input`
  border: 1px solid #000;
  border-radius: 5px;
  min-width: 300px;
  min-height: 30px;
  padding: 8px;
  font-size: 16px;
`;

const InputLabel = styled.label`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export { TextInput, InputLabel, InputContainer };
