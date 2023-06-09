import { useState } from "react"
import Bufferer from "../../components/Bufferer"
import { Container, H } from "./styledComponents"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

const BookDetails = () => {
  const [book, setBook] = useState([])
  const [isLoading, setLoadingStatus] = useState(true)
  const [isApiError, setApiErrorStatus] = useState(false)

  useEffect(() => {
    fetchBook()
  }, [])

  const { id } = useParams()

  const fetchBook = async () => {
    console.log(id)
    const url = `http://www.localhost:4000/book/${id}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBook(data)
        setLoadingStatus(false)
      })
      .catch(() => {
        setLoadingStatus(false)
        setApiErrorStatus(true)
      })
  }

  const renderBook = () => (
    <Container>
      <H>
        <i>Title:-</i> {book.title}
      </H>
      <H>
        <i>Description:-</i>
        {book.description}
      </H>
      <H>
        <i>Author:-</i> {book.author}
      </H>
      <H>
        <i>Price:-</i> {book.price}
      </H>
    </Container>
  )

  const renderLoadingView = () => <Bufferer />

  const renderDataView = () => {
    if (isApiError) {
      return (
        <>
          <br />
          <h1>
            <center>Api Error !</center>
          </h1>
          <br />
        </>
      )
    }
    return renderBook()
  }

  return isLoading ? renderLoadingView() : renderDataView()
}

export default BookDetails
