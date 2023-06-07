import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/books" element={<h1>Books List</h1>} />
        <Route path="/book/:id" element={<h1>Detailed book</h1>} />
        <Route path="/cart" element={<h1>cart items</h1>} />
        <Route path="/checkout" element={<h1>checkouts</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
