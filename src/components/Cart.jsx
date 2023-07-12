import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Cart() {
    const {cart, totalCompra, eliminarDelCarrito, vaciarCarrito} = useContext(CartContext)
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    if(cart.length === 0) {
        return(
            <div className='container my-5'>
                <h2>Carrito Vacio</h2>
                <hr />
                <Link onClick={handleVolver} className='btn btn-primary'>Volver</Link>
            </div>
        )
    }
  return (
    <div>
      return (
        <div className="container my-5">

            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.nombre}</h4>
                        <img src={prod.img} alt={prod.nombre}/>
                        <p>Precio: ${prod.precio}</p>
                        <p>Cantidad: {prod.cantidad}</p>

                        <button 
                            className="btn btn-danger"
                            onClick={() => eliminarDelCarrito(prod.id)}
                        >
                            
                        </button>
                        <hr/>
                    </div>
                ))
            }

            <div>
                <h5>Total: ${totalCompra()}</h5>
                <hr/>
                <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
                <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
            </div>
        </div>
    )
    </div>
  )
}

export default Cart