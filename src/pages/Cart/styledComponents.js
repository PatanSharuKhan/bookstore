import styled from "styled-components"

export const Ul = styled.ul`
  padding-left: 0px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
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
    margin-right: 10px;
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
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  padding: 5px;
  border: 0px;
  border-radius: 5px;
  width: ${(props) => props.width};
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
export const CostBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`
export const ActionBox = styled.div`
  font-size: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: cemter;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`
export const EmptyView = styled.div`
  padding: 10px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`
export const EmptyImg = styled.img`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`
