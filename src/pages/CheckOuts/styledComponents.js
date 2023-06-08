import styled from "styled-components"

export const TabsContainer = styled.ul`
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`
export const TabItem = styled.li`
  list-style-type: none;
  font-size: 20px;
  font-weight: bold;
  margin-right: 40px;
  border-bottom: ${(props) => (props.isActiveTab ? "2px solid black" : "0px")};
  cursor: pointer;
`

export const Form = styled.form`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 50px;
  @media screen and (min-width: 768px) {
    width: 40%;
    margin: auto;
  }
`
export const Input = styled.input`
  width: 90%;
  height: 40px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid grey;
`
export const Button = styled.button`
  height: 40px;
  border: 0px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  background-color: #fae5df;
  font-weight: bold;
`
export const A = styled.a`
  text-decoration: none;
  color: white;
  background-color: green;
  border: 0px;
  border-radius: 5px;
  padding: 5px;
  margin-top: 20px;
  cursor: pointer;
`
