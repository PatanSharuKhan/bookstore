import { useState } from "react"
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
  Hr,
  SearchBar,
  Select,
  Option,
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
    price: 356,
  },
  {
    id: 2,
    title: "Second",
    description: "Second person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 256,
  },
  {
    is: 3,
    title: "Third",
    description: "Third person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 756,
  },
  {
    id: 4,
    title: "Fourth",
    description: "Fourth person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 100,
  },
  {
    id: 5,
    title: "Fifth",
    description: "Fifth person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 900,
  },
  {
    id: 6,
    title: "Sixth",
    description: "Sixth person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 400,
  },
  {
    id: 7,
    title: "Seventh",
    description: "Seventh person to publish this book ! interesting right ! ",
    author: "Sharukhan",
    rating: 4.0,
    price: 420,
  },
]

const Books = () => {
  const [query, setQuery] = useState("")

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

  const filteringBooksList = booksList.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  )
  console.log(filteringBooksList)
  return (
    <>
      <Header>
        <H>Discover books</H>
        <SearchBar
          type="search"
          placeholder="Search with keyword"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Select>
          <Option>Low to High</Option>
          <Option>High to Low</Option>
        </Select>
      </Header>
      <Hr />
      <Ul>
        {filteringBooksList.map((each) => {
          return (
            <Li key={each.id}>
              <Img
                src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/007/9780857360007.jpg"
                alt="book"
              />
              <BookData>
                <H>{each.title}</H>
                <P>
                  <b>Desc: </b>
                  {each.description}
                </P>
                <P>
                  <b>Author: </b>
                  {each.author}
                </P>
                <P>
                  <GiPriceTag />
                  <b> :</b> {each.price}
                </P>
                <Buttons>
                  <Button
                    type="button"
                    onClick={() => {
                      alert(each.title + " item added")
                      addToCart(each)
                    }}
                  >
                    Add
                  </Button>
                  <a href={`book/${each.id}`}>
                    <Button type="button">View More</Button>
                  </a>
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
