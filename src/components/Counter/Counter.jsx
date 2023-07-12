import React from "react";
import "./Counter.scss";

function Counter({ maxCant, cantidad, setCantidad, handleAgregar }) {
  const handleSumar = () => {
    cantidad < maxCant && setCantidad(cantidad++);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad--);
  };
  return (
    <div>
      <button
        onClick={handleRestar}
        className={`btn btn-primary ${cantidad === 1 && "hidden"}`}
      >
        -
      </button>
      <span className="mx-3">{cantidad}</span>
      <button
        onClick={handleSumar}
        className={`btn btn-primary ${cantidad === maxCant && "hidden"}`}
      >
        +
      </button>
      <hr />
      <button className="btn btn-primary my-2" onClick={handleAgregar}>Agregar al Carrito</button>
    </div>
  );
}

export default Counter;
