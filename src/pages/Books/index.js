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

const cartItemsKey = "cartItems"

const booksList = [
  {
    id: 1,
    title: "First",
    description: "First person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
  },
  {
    id: 2,
    title: "First",
    description: "First person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
  },
  {
    is: 3,
    title: "First",
    description: "First person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
  },
  {
    id: 4,
    title: "First",
    description: "First person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
  },
  {
    id: 5,
    title: "First",
    description: "First person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
  },
  {
    id: 6,
    title: "First",
    description: "First person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
  },
  {
    id: 7,
    title: "First",
    description: "First person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
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
                <P>{each.rating}</P>
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
