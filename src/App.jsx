import { Header } from "./components/Header";
import Cart from "./components/Cart";
import ItemCards from "./components/ItemCards";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ItemCards />} />
            <Route path="/productos/:categoriaId" element={<ItemCards />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
