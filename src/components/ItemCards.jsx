import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemCards() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const productRef = collection(db, "productos");
    getDocs(productRef)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProductos(items);
        console.log(items);
      })
      .catch((e) => console.log(e))
      .finally(setLoading(false));
  }, []);

  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        {loading ? (
          <h2>Cargando ...</h2>
        ) : (
          <ItemList items={productos}/>
          
        )}
      </div>
    </div>
  );
}

export default ItemCards;
