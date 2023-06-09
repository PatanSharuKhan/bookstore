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
  width: 100%;
  border-radius: 10px;
  @media screen and (min-width: 526px) {
    width: 49%;
  }
  @media screen and (min-width: 1100px) {
    width: 32%;
  }
`

export const H = styled.h1`
  text-align: start;
`

export const P = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
  margin-bottom: 5px;
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
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`
export const Hr = styled.hr`
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`
export const SearchBar = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  width: 250px;
  font-size: 20px;
  padding: 5px;
`
export const Select = styled.select`
  padding: 5px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid grey;
`

export const Option = styled.option``
