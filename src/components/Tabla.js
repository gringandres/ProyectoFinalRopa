import React from "react";

function Tabla({ img, precio, nombre, talla, cantidad, id, borrarElemento }) {
  return (
    <>
      <tr>
        <td>
          <img src={img} alt="" />
        </td>
        <td>{nombre}</td>
        <td>{talla}</td>
        <td>{cantidad}</td>
        <td>{precio}</td>
        <td>
          <a
            className="borrar"
            href="/"
            onClick={(e) => {
              borrarElemento(e, id);
            }}
          >
            x
          </a>
        </td>
      </tr>
    </>
  );
}

export default Tabla;
