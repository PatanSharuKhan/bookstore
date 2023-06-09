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
import Bufferer from "../../components/Bufferer"
import { useEffect } from "react"

const cartItemsKey = "cartItems"

const Books = () => {
  const [query, setQuery] = useState("")
  const [books, setBooks] = useState([])
  const [isLoading, setLoadingStatus] = useState(true)
  const [isApiError, setApiErrorStatus] = useState(false)

  useEffect(() => {
    fetchBooks()
  })

  const fetchBooks = async () => {
    const url = "http://www.localhost:4000/books"
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data)
        setLoadingStatus(false)
      })
      .catch(() => {
        setLoadingStatus(false)
        setApiErrorStatus(true)
      })
  }

  // -----[ Event Actions ]-----

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

  const filteringBooksList = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  )

  // -----[ Header Section ]-----

  const renderHeader = () => (
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
  )

  // -----[ Books Cards Section ]-----

  const renderImage = () => (
    <Img
      src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/007/9780857360007.jpg"
      alt="book"
    />
  )

  const renderBookData = (book) => (
    <BookData>
      <H>{book.title}</H>
      <P>
        <b>Desc: </b>
        {book.description}
      </P>
      <P>
        <b>Author: </b>
        {book.author}
      </P>
      <P>
        <GiPriceTag />
        <b> :</b> {book.price}
      </P>
      <Buttons>
        <Button
          type="button"
          onClick={() => {
            alert(book.title + " item added")
            addToCart(book)
          }}
        >
          Add
        </Button>
        <a href={`book/${book.id}`}>
          <Button type="button">View More</Button>
        </a>
      </Buttons>
    </BookData>
  )

  const renderBooksCards = () => (
    <Ul>
      {filteringBooksList.map((book) => {
        return (
          <Li key={book.id}>
            {renderImage()}
            {renderBookData(book)}
          </Li>
        )
      })}
    </Ul>
  )

  const renderLoadingView = () => <Bufferer />

  const renderDataView = () => {
    if (isApiError) {
      return (
        <>
          <br />
          <H>
            <center>Api Error !</center>
          </H>
          <br />
        </>
      )
    }
    return (
      <>
        {renderHeader()}
        <Hr />
        {renderBooksCards()}
      </>
    )
  }

  return isLoading ? renderLoadingView() : renderDataView()
}

export default Books
