import React from "react";
import ItemCard from "./ItemCard";

function ItemCards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        <div className="col-md-4">
          <ItemCard />
        </div>
      </div>
    </div>
  );
}

export default ItemCards;
