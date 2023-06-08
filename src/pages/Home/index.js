import { Component } from "react"
import {
  H,
  P,
  Img,
  LandingData,
  LandingSection,
  Button,
} from "./styledComponents"

class Home extends Component {
  render() {
    return (
      <>
        <LandingSection>
          <LandingData>
            <H>Discover Your Favourite Books, Order Online</H>
            <P>One of the largest e-commerse website in India</P>
            <a href="/books">
              <Button>Discover Books</Button>
            </a>
          </LandingData>
          <Img
            src="https://thumbs.dreamstime.com/b/stacked-closed-books-icon-cartoon-isolated-149755178.jpg"
            alt="landing-image"
          />
        </LandingSection>
      </>
    )
  }
}
export default Home
