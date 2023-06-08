import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const Img = styled.img`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 40%;
    margin: auto;
  }
`
