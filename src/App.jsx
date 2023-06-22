import { Header } from "./components/Header";
import ItemCard from "./components/ItemCard";
import ItemCards from "./components/ItemCards";
import { ItemListContainer } from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Tutor"} />}/>
          <Route path="/detalle" element={<ItemCard />} />
        </Routes>
      </BrowserRouter>
      <div className="App">
        
        
        <ItemCards />
      </div>
    </>
  );
}

export default App;
