import { Container, Title, Ul, Li, A, Button } from "./styledComponents"
import StoreContext from "../../storeContext"

const Navbar = () => {
  return (
    <Container>
      <A href="/">
        <Title>Book Store</Title>
      </A>
      <Ul>
        <Li>
          <A href="/">Home</A>
        </Li>
        <Li>
          <A href="/books">Books</A>
        </Li>
        <Li>
          <A href="/cart">Cart</A>
        </Li>
        <Li>
          <StoreContext.Consumer>
            {(value) => {
              console.log(value)
              const { isUserAuthorised, changeUserAuthority } = value
              return (
                <>
                  {!isUserAuthorised && (
                    <Button type="button" onClick={() => changeUserAuthority()}>
                      Login
                    </Button>
                  )}
                  {isUserAuthorised && (
                    <Button type="button" onClick={() => changeUserAuthority()}>
                      Logout
                    </Button>
                  )}
                </>
              )
            }}
          </StoreContext.Consumer>
        </Li>
      </Ul>
    </Container>
  )
}

export default Navbar
