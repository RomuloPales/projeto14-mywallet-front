import styled from "styled-components";

export default function Logo () {
    return (
      <Container>
        <Title>MyWallet</Title>
      </Container>
    )
  }


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 135px;
  margin-bottom: 24px;
`

const Title = styled.h1`
  font-family: 'Saira Stencil One', cursive;
  color: white;
  font-weight: 400;
  font-size: 32px;
`