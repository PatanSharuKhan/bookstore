import { useState } from "react"
import {
  TabItem,
  TabsContainer,
  Form,
  Input,
  Button,
  A,
} from "./styledComponents"

const cartItemsKey = "cartItems"
const tabItems = ["DETAILS", "PAYMENT"]
const initailAddress = {
  name: "",
  age: "",
  number: "",
  street: "",
  pincode: "",
  state: "",
}

const CheckOuts = () => {
  const [activeTab, setActiveTab] = useState(tabItems[0])
  const [address, setAddress] = useState(initailAddress)

  const updateName = (event) => {
    setAddress({ ...address, fullname: event.target.value })
  }

  const updateAge = (event) => {
    setAddress({ ...address, age: event.target.value })
  }

  const updateNumber = (event) => {
    setAddress({ ...address, number: event.target.value })
  }

  const updateStreet = (event) => {
    setAddress({ ...address, street: event.target.value })
  }

  const updatePincode = (event) => {
    setAddress({ ...address, pincode: event.target.value })
  }

  const updateState = (event) => {
    setAddress({ ...address, state: event.target.value })
  }

  const verifyAndProceed = (event) => {
    event.preventDefault()
    const { fullname, age, number, street, pincode, state } = address

    if (!fullname) {
      alert("name field is empty")
      return
    }
    if (!age) {
      alert("age field is empty")
      return
    }
    if (!number) {
      alert("number field is empty")
      return
    }
    if (!street) {
      alert("street field is empty")
      return
    }
    if (!pincode) {
      alert("pincode field is empty")
      return
    }
    if (!state) {
      alert("street field is empty")
      return
    }
    setActiveTab(tabItems[1])
  }

  const renderDetailsBlock = () => {
    const { fullname, age, number, street, pincode, state } = address
    return (
      <Form onSubmit={verifyAndProceed}>
        <Input
          placeholder="Full Name"
          type="text"
          value={fullname}
          onChange={updateName}
        />
        <Input
          placeholder="Age"
          type="number"
          value={age}
          onChange={updateAge}
        />
        <Input
          placeholder="Phone Number"
          type="number"
          value={number}
          onChange={updateNumber}
        />
        <Input
          placeholder="Street"
          type="text"
          value={street}
          onChange={updateStreet}
        />
        <Input
          placeholder="Pincode"
          type="number"
          value={pincode}
          onChange={updatePincode}
        />
        <Input
          placeholder="State"
          type="text"
          value={state}
          onChange={updateState}
        />
        <Button type="submit">Next</Button>
      </Form>
    )
  }

  const renderTotalCost = () => {
    const localStorageCartItems = JSON.parse(localStorage.getItem(cartItemsKey))
    let totalAmount = 0
    localStorageCartItems.map((a) => (totalAmount += a.quantity * a.price))
    return totalAmount
  }

  const renderPaymentBlock = () => (
    <Form>
      <Input placeholder="Account Number" />
      <Input placeholder="IFSC Code" />
      <Button disabled>Amount: {renderTotalCost()}</Button>
      <A href="/success-payment">Pay Now</A>
    </Form>
  )

  const isDetailsTabActive = activeTab === tabItems[0]
  const isPaymentTabActive = activeTab === tabItems[1]
  return (
    <>
      <TabsContainer>
        <TabItem
          onClick={() => setActiveTab(tabItems[0])}
          isActiveTab={isDetailsTabActive}
        >
          Details
        </TabItem>
        <TabItem
          onClick={() => setActiveTab(tabItems[1])}
          isActiveTab={isPaymentTabActive}
        >
          Payment
        </TabItem>
      </TabsContainer>
      {isDetailsTabActive && renderDetailsBlock()}
      {isPaymentTabActive && renderPaymentBlock()}
    </>
  )
}

export default CheckOuts
