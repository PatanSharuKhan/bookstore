import {
  Ul,
  Li,
  P,
  Hr,
  Img,
  BookData,
  H,
  Buttons,
  Button,
  Header,
  CostBox,
  ActionBox,
  EmptyView,
  EmptyImg,
} from "./styledComponents"
import { useEffect, useState } from "react"

const cartItemsKey = "cartItems"

const Cart = () => {
  const [itemsList, setItemsList] = useState([])

  useEffect(() => {
    let localStorageCartItems = JSON.parse(localStorage.getItem(cartItemsKey))
    if (localStorageCartItems === null || localStorageCartItems.length === 0) {
      localStorageCartItems = []
    }
    setItemsList(localStorageCartItems)
  }, [])

  const decreaseItemQuantity = (item) => {
    let localStorageCartItems = JSON.parse(localStorage.getItem(cartItemsKey))
    let updatedCartItems = localStorageCartItems.map((each) => {
      const isMatched = each.id === item.id
      if (isMatched) {
        return { ...each, quantity: each.quantity - 1 }
      }
      return each
    })
    updatedCartItems = updatedCartItems.filter((each) => {
      let isQuantityGreaterOne = each.quantity > 0
      return isQuantityGreaterOne
    })
    const value = JSON.stringify(updatedCartItems)
    localStorage.setItem(cartItemsKey, value)
    setItemsList(updatedCartItems)
  }

  const increaseItemQuantity = (item) => {
    let localStorageCartItems = JSON.parse(localStorage.getItem(cartItemsKey))
    const updatedCartItems = localStorageCartItems.map((each) => {
      let isMatched = each.id === item.id
      if (isMatched) {
        return { ...each, quantity: each.quantity + 1 }
      }
      return each
    })
    const value = JSON.stringify(updatedCartItems)
    localStorage.setItem(cartItemsKey, value)
    setItemsList(updatedCartItems)
  }

  const makeCartItemsEmpty = () => {
    localStorage.setItem(cartItemsKey, JSON.stringify([]))
    setItemsList([])
  }

  const renderActionBox = () => (
    <ActionBox>
      <Button color="white" bgColor="blue">
        Order Now
      </Button>
    </ActionBox>
  )

  const renderCostBox = () => (
    <CostBox>
      <H>Total Cost</H>
      <H>RS.1000</H>
    </CostBox>
  )

  const renderCartItems = () => (
    <Ul>
      {itemsList.map((each) => {
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
                  bgColor="#303179"
                  onClick={() => decreaseItemQuantity(each)}
                >
                  -
                </Button>
                <Button
                  type="button"
                  width="20px"
                  color="white"
                  bgColor="#303179"
                >
                  {each.quantity}
                </Button>
                <Button
                  type="button"
                  width="20px"
                  color="white"
                  bgColor="#303179"
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
  )

  const renderHeader = () => (
    <Header>
      <H>Cart Items</H>
      <Button color="white" bgColor="#303179" onClick={makeCartItemsEmpty}>
        Remove All
      </Button>
    </Header>
  )

  const renderItemsView = () => (
    <>
      {renderCartItems()}
      {<Hr />}
      {renderCostBox()}
      {renderActionBox()}
    </>
  )

  const renderNoItemsView = () => (
    <EmptyView>
      <EmptyImg
        src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png"
        alt="empty-cart"
      />
    </EmptyView>
  )

  const isCartEmpty = itemsList.length > 0
  return (
    <>
      {renderHeader()}
      <Hr />
      {!isCartEmpty && renderNoItemsView()}
      {isCartEmpty && renderItemsView()}
    </>
  )
}

export default Cart
