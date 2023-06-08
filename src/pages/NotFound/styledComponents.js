import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  font-family: outfit;
  color: #303179;
  background-color: #fae5df;
  cursor: pointer;
  border: 0px;
  border-radius: 5px;
  height: 40px;
  font-size: 20px;
`
export const Img = styled.img`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
