import {
  Ul,
  Li,
  P,
  Img,
  BookData,
  H,
  Buttons,
  Button,
} from "./styledComponents"
import { GiPriceTag } from "react-icons/gi"

const cartItemsKey = "cartItems"

const booksList = [
  {
    id: 1,
    title: "First",
    description: "First person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 10000,
  },
  {
    id: 2,
    title: "Second",
    description: "Second person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 10000,
  },
  {
    is: 3,
    title: "Third",
    description: "Third person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 10000,
  },
  {
    id: 4,
    title: "Fourth",
    description: "Fourth person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 10000,
  },
  {
    id: 5,
    title: "Fifth",
    description: "Fifth person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 10000,
  },
  {
    id: 6,
    title: "Sixth",
    description: "Sixth person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 10000,
  },
  {
    id: 7,
    title: "Seventh",
    description: "Seventh person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 10000,
  },
]

const Books = () => {
  const addToCart = (item) => {
    let localStorageCartItems = JSON.parse(localStorage.getItem(cartItemsKey))
    const itemObject = { ...item, quantity: 1 }
    const areItemsNull = localStorageCartItems === null
    if (areItemsNull) {
      const value = JSON.stringify([itemObject])
      localStorage.setItem(cartItemsKey, value)
    } else {
      let isListUpdated = false
      let updatedCartItems = localStorageCartItems.map((each) => {
        const isItemMatched = each.id === item.id
        if (isItemMatched) {
          isListUpdated = true
          return { ...each, quantity: each.quantity + 1 }
        }
        return each
      })
      if (!isListUpdated) {
        updatedCartItems = [...localStorageCartItems, itemObject]
      }
      const value = JSON.stringify(updatedCartItems)
      localStorage.setItem(cartItemsKey, value)
    }
  }

  return (
    <>
      <hr />
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
                <P>
                  <GiPriceTag />
                  {each.price}
                </P>
                <Buttons>
                  <Button type="button" onClick={() => addToCart(each)}>
                    Add
                  </Button>
                  <Button type="button">View More</Button>
                </Buttons>
              </BookData>
            </Li>
          )
        })}
      </Ul>
    </>
  )
}
export default Books
