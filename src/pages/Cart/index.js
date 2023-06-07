import {
  Ul,
  Li,
  P,
  Img,
  BookData,
  H,
  Buttons,
  Button,
  Header,
} from "./styledComponents"

const cartItemsKey = "cartItems"

let booksList = JSON.parse(localStorage.getItem(cartItemsKey))

if (booksList === null || booksList.length === 0) {
  booksList = []
}

const Cart = () => {
  const decreaseItemQuantity = (item) => {}
  const increaseItemQuantity = (item) => {}

  return (
    <>
      <Header>
        <H>Cart Items</H>
      </Header>
      <Ul>
        {booksList.map((each) => {
          return (
            <Li key={each.id}>
              <Img
                src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/007/9780857360007.jpg"
                alt="book"
              />
              <BookData>
                <H>{each.title}</H>
                <P>{each.description}</P>
                <P>{each.author}</P>
                <P>{each.rating}</P>
                <Buttons>
                  <Button
                    type="button"
                    width="20px"
                    color="white"
                    onClick={() => decreaseItemQuantity(each)}
                  >
                    -
                  </Button>
                  <Button type="button" width="20px" color="white">
                    {booksList.length}
                  </Button>
                  <Button
                    type="button"
                    width="20px"
                    color="white"
                    onClick={() => increaseItemQuantity(each)}
                  >
                    +
                  </Button>
                </Buttons>
              </BookData>
            </Li>
          )
        })}
      </Ul>
    </>
  )
}

export default Cart
