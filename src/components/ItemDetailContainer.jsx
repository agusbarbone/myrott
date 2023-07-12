import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const itemRef = doc(db, "productos", itemId);

    getDoc(itemRef)
      .then((doc) => {
        setItem({
          ...doc.data(),
          id: doc.id,
        });
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div className="container my-5">
      {loading ? <h2>Cargando...</h2> : <ItemDetail {...item} />}
    </div>
  );
}

export default ItemDetailContainer;
