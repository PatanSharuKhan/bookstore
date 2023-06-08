import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5cac2;
  position: sticky;
  top: 0px;
  @media screen and (min-width: 768px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`
export const Title = styled.h1`
  color: #141850;
`
export const Ul = styled.ul`
  display: none;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const Li = styled.li`
  list-style-type: none;
  margin-right: 20px;
  cursor: pointer;
`
export const A = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
`

export const Button = styled.button`
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  border: 0px;
`
