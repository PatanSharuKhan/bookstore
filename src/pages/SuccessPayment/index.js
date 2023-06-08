import { Img, Container } from "./styledComponents"

const SuccessPayment = () => {
  const cartItemsKey = "cartItems"
  localStorage.removeItem(cartItemsKey)
  return (
    <Container>
      <Img
        src="https://momentumacademy.net/wp-content/uploads/2020/05/Paymentsuccessful21.png"
        alt="success-payment"
      />
    </Container>
  )
}

export default SuccessPayment
