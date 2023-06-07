import { Container, Title, Ul, Li, A, Button } from "./styledComponents"

const Navbar = () => (
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
        <A href="#">History</A>
      </Li>
      <Li>
        <Button type="button">Logout</Button>
      </Li>
    </Ul>
  </Container>
)

export default Navbar
