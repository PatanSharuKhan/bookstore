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

const Books = () => (
  <Ul>
    {booksList.map((each) => (
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
            <Button type="button">Add</Button>
            <Button type="button">View More</Button>
          </Buttons>
        </BookData>
      </Li>
    ))}
  </Ul>
)

export default Books
