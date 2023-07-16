import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log("🚀 ~ file: CartContext.jsx:9 ~ CartProvider ~ cart:", cart);

  const agregarAlCarrito = (prod) => {
    setCart([...cart, prod]);
    alert("Agregado Exitosamente");
  };

  const eliminarDelCarrito = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const estaEnElCarrito = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const totalCompra = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const totalCantidad = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        eliminarDelCarrito,
        estaEnElCarrito,
        totalCompra,
        totalCantidad,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
