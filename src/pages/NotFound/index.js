import { Container, Button, Img } from "./styledComponents"

const NotFound = () => (
  <Container>
    <Img
      src="https://cdn2.hubspot.net/hubfs/242200/shutterstock_774749455.jpg"
      alt="page-not-found"
    />
    <a href="/">
      <Button type="button">Go to Home Page</Button>
    </a>
  </Container>
)

export default NotFound
