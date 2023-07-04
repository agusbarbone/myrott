import { Link } from "react-router-dom"



const ItemCard = ({id, stock, nombre, precio, descripcion, imagen, categoria, marca, modelo}) => {

    return (
        <div className='col-3 m-2'>
            <h4>{marca+nombre}</h4>
            <img src={imagen} alt={nombre}/>
            <p>{descripcion}</p>
            {stock <= 10 && <p style={{fontWeight: 700, color: 'red'}}>Quedan sólo {stock} unidades!</p>}

            <p>Precio: ${precio}</p>
            <Link className="btn btn-primary" to={`/detail/${id}`}>Ver más</Link>
        </div>
    )
}

export default ItemCard