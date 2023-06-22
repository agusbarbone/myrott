import React from "react";

function ItemCard() {
  return (
    <div className="card rounded-0 text-center bg-dark">
      <div className="card-body text-light">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          culpa.
        </p>
        <button className="btn btn-outline-secondary rounded-0">Detalle</button>
      </div>
    </div>
  );
}

export default ItemCard;
