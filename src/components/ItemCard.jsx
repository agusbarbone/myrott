import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemCard = ({
  id,
  stock,
  nombre,
  precio,
  descripcion,
  imagen,
  categoria,
  marca,
  modelo,
}) => {
  return (
    <Card style={{ width: "14rem" }} className="m-1 p-1">
      <Card.Img variant="top" src={imagen} width="100" height="220" />
      <Card.Body>
        <Card.Title>{marca + " " + nombre}</Card.Title>
        <Card.Text>Precio: {precio}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Link className="btn btn-primary" to={`/detail/${id}`}>
          Detalle
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
