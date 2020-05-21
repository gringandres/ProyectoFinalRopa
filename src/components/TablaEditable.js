import React, { Component } from 'react'

export class TablaEditable extends Component {
  state = {
    arregloCantidad: []
  }

  componentDidMount() {
    const { cantidad } = this.props
    let calcaularArreglo = []
    for (let index = 0; index < cantidad; index++) {
      calcaularArreglo[index] = index + 1;
    }
    this.setState({ arregloCantidad: calcaularArreglo })
  }
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
      carrito
    } = this.props
    const { arregloCantidad } = this.state
    return (
      <>
        <tr>
          <td><img src={img} alt="" /></td>
          <td>{nombre}</td>
          <td>
            <select id="tallas">
              {talla.map(opcion => (
                <option value={opcion}>{opcion}</option>
              ))}
            </select>
          </td>
          <td>{cantidad}</td>
          <td>
            <select id="tallas">
              {arregloCantidad && arregloCantidad.map(opcion => (
                <option value={opcion}>{opcion}</option>
              ))}
            </select>
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
                }
              }
            >
              x
          </a>
          </td>
        </tr>
      </>
    )
  }
}

export default TablaEditable
