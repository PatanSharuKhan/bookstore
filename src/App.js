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

function App() {
  const cartItemsKey = "cartItems"
  return (
    <BrowserRouter>
      <StoreContext.Provider value={{ cartItemsKey }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<h1>Detailed book</h1>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOuts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </StoreContext.Provider>
    </BrowserRouter>
  )
}

export default App
