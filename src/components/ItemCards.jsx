import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useParams } from "react-router-dom";

function ItemCards() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoriaId} = useParams()

  useEffect(() => {
    setLoading(true);
    const productRef = collection(db, "productos");
    const q = categoriaId
               ? query(productRef, where("categoria", "==", categoriaId))
               : productRef
    getDocs(q)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProductos(items);
        console.log(items);
      })
      .catch((e) => console.log(e))
      .finally(setLoading(false));
  }, [categoriaId]);

  return (
    <div >
      <h1 className="d-flex justify-content-center">Productos</h1>
      <hr />
      <div className="container d-flex justify-content-center h-100 align-items-center">
        {loading ? <h2>Cargando ...</h2> : <ItemList items={productos} />}
      </div>
    </div>
  );
}

export default ItemCards;
