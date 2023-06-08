import styled from "styled-components"

export const TabsContainer = styled.ul`
  padding: 10px;
  padding-top: 30px;
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
