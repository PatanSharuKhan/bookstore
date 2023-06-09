import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Books from "./pages/Books"
import NotFound from "./pages/NotFound"
import StoreContext from "./storeContext"
import CheckOuts from "./pages/CheckOuts"
import SuccessPayment from "./pages/SuccessPayment"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import BookDetails from "./pages/BookDetails"

function App() {
  const [isUserAuthorised, setUserAuthority] = useState(false)
  useEffect(() => {
    const tokenKey = "jwt_tokens"
    const jwtToken = Cookies.get(tokenKey)
    const isUserAuthorized = !(jwtToken === undefined)
    setUserAuthority(isUserAuthorized)
  }, [])
  const cartItemsKey = "cartItems"

  const changeUserAuthority = () => {
    setUserAuthority(!isUserAuthorised)
  }
  return (
    <BrowserRouter>
      <StoreContext.Provider
        value={{ cartItemsKey, isUserAuthorised, changeUserAuthority }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {isUserAuthorised && <Route path="/books" element={<Books />} />}
          {isUserAuthorised && (
            <Route path="/book/:id" element={<BookDetails />} />
          )}
          {isUserAuthorised && <Route path="/cart" element={<Cart />} />}
          {isUserAuthorised && (
            <Route path="/checkout" element={<CheckOuts />} />
          )}
          {isUserAuthorised && (
            <Route path="/success-payment" element={<SuccessPayment />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </StoreContext.Provider>
    </BrowserRouter>
  )
}

export default App
