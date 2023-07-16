import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Counter from "./Counter/Counter";

function ItemDetail({
  id,
  stock,
  nombre,
  precio,
  descripcion,
  imagen,
  categoria,
  marca,
  modelo,
}) {
  const { agregarAlCarrito, estaEnElcarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };

  const handleAgregar = () => {
    const item = {
      id,
      nombre,
      precio,
      descripcion,
      imagen,
      categoria,
      marca,
      modelo,
      cantidad,
    };
    agregarAlCarrito(item);
  };

  return (
    <div className="container my-5">
      <h2>{nombre}</h2>

      <img src={imagen} alt={nombre} />
      <p>{descripcion}</p>

      <h4>Precio: ${precio}</h4>
      <br />

      <h5>Categoría: {categoria}</h5>
      <br />

      {/* {estaEnElcarrito(id)
        ? <Link>Terminar compra</Link>
        : <Counter 
            maxCant={stock}
            cantidad={cantidad}
            setCantidad={setCantidad}
            handleAgregar={handleAgregar}/>
      }  */}
      <Counter
        maxCant={stock}
        cantidad={cantidad}
        setCantidad={setCantidad}
        handleAgregar={handleAgregar}
      />
      <button onClick={handleVolver} className="btn btn-primary">
        Volver
      </button>
    </div>
  );
}

export default ItemDetail;
