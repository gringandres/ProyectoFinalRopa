import React, { Component } from 'react'

class TablaEditable extends Component {

  render() {
    const {
      img,
      precio,
      nombre,
      talla,
      cantidad,
      id,
      borrarElemento,
      controlarModal,
      carrito,
      cantidadEditar
    } = this.props
    return (
      <>
        <tr>
          <td><img src={img} alt="" /></td>
          <td>{nombre}</td>
          <td>
            <select id="tallas">
              {talla.map(opcion => (
                <option value={opcion} key={id}>{opcion}</option>
              ))}
            </select>
          </td>
          <td>{cantidad}</td>
          <td>
            <input
              type="text"
              onChange={(e) => cantidadEditar(e, id)}

            >
            </input>
          </td>
          <td>{precio}</td>
          <td>
            <a
              className="borrar"
              href="/"
              onClick={
                (e) => {
                  borrarElemento(e, id)
                  if (carrito === 1) {
                    controlarModal()
                  }
                }}
            >x </a>
          </td>
        </tr>
      </>
    )
  }
}

export default TablaEditable
