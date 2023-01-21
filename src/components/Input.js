import styled from "styled-components";

export default function Input(props) {
	return <InputEntry {...props} />;
}


const InputEntry = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 60px;
  margin-bottom: 15px;
  border: none;
  padding: 15px;
  box-sizing: border-box;
  font-size: 20px;
  &::placeholder {
    color: black;
  }
`