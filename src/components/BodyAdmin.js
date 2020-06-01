import React from "react";
import "../styles/Body.css";

function BodyAdmin({
  id,
  nombre,
  talla,
  cantidad,
  precio,
  img,
  dispobile,
  agregarCarrito,
}) {
  const botonEditar = (e) => {
    e.preventDefault();
    const selecionado = { id, nombre, talla, cantidad, precio, img };
    agregarCarrito(selecionado);
  };

  return (
    <div className="card">
      <div className="ImgCard">
        <img src={img} alt="" />
      </div>
      <h4>{nombre}</h4>
      <p id="precio" className="precio">
        Tallas: <input value={talla}></input>
      </p>
      <p>{dispobile ? "Disponible" : "No Hay Disponibilidad"}</p>
      <p id="precio" className="precio">
        Precio: <input value={precio}></input>
      </p>
      <button className="botonAgregar" onClick={botonEditar}>
        Editar
      </button>
    </div>
  );
}

export default BodyAdmin;
