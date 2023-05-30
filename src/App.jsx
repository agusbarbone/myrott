import { Header } from "./components/Header";
import { ItemListContainer } from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
      <Header />
      <ItemListContainer greeting={"Tutor"} />

    </>
  );
}

export default App;
  
