import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export const CartWidget = () => {
  return (
    <div>
      <Button>
        Carrito 
        <Navbar.Brand href="c">
          <img
            src=""
            width="30"
            height="30"
            className="d-inline-block align-center"
            alt=""
          />
        </Navbar.Brand>
      </Button>
    </div>
  );
};
