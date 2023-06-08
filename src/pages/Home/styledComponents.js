import styled from "styled-components"

export const LandingSection = styled.div`
  height: 80vh;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const LandingData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const Img = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const H = styled.h1`
  color: red;
  text-align: center;
`

export const P = styled.p`
  color: blue;
`
export const Button = styled.button`
  height: 40px;
  margin-top: 20px;
  border: 0px;
  border-radius: 5px;
  background-color: pink;
  color: red;
  font-weight: bold;
  cursor: pointer;
`
