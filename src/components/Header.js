import styled from "styled-components";
export default function Header(props) {
	return <Headerr>{props.children}</Headerr>;
}


const Headerr = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  margin-bottom: 20px;
  > h1 {
    margin: 0;
  }
`;