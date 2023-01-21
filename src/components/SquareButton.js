import { Link } from "react-router-dom";
import styled from "styled-components";


export default function SquareButton(props) {
	return (
    <LinkStyled to={props.link}>
      <SquareButtons {...props} />
    </LinkStyled>
  );
}

const LinkStyled = styled(Link)`
  flex: 2;
`

const SquareButtons= styled.button`
  width: 100%;
  height: 110px;
  border-radius: 5px;
  background-color: #A328D6;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  font-size: 17px;
  color: white;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  > p {
    margin: 0;
    width: 50px;
    text-align: left;
  }
`;