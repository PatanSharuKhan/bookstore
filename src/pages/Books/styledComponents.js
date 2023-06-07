import styled from "styled-components"

export const Ul = styled.ul`
  padding-left: 0px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`

export const Li = styled.li`
  list-style-type: none;
  box-shadow: 0px 4px 12px 0px grey;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  max-width: 350px;
  border-radius: 10px;
`

export const H = styled.h1`
  text-align: start;
`

export const P = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
`
export const Img = styled.img`
  width: 30%;
  display: block;
  margin: auto;
`
export const BookData = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const Buttons = styled.div`
  display: flex;
`
export const Button = styled.button`
  margin-right: 10px;
  cursor: pointer;
  color: white;
  background-color: #303179;
  padding: 5px;
  border: 0px;
  border-radius: 5px;
`
