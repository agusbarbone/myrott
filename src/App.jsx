import { Header } from "./components/Header";
import ItemCards from "./components/ItemCards";
import  ItemModal from "./components/ItemModal"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemCards />} />
          <Route path="/modal" element={<ItemModal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
