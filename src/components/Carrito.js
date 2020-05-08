import React, { Component } from 'react'

class Carrito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarCarrito: false
    }

  }

  controlarCarrito = () => {
    this.setState({
      mostrarCarrito: !this.state.mostrarCarrito
    })
  }

  render() {
    const { mostrarCarrito } = this.state
    const { alerta, carrito, borrarElemento } = this.props
    const carritoMostrar = (
      <div className="menuCarrito menudos" id="menuCarrito">
        <h3>Carrito</h3>
        <table id="detallePedido">
          <tr>
            <th>Imagen</th>
            <th>Referencia</th>
            <th>Talla</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
          {carrito.map(carro => (
            <>
              <tr>
                <td><img src={carro.img} alt="" /></td>
                <td>{carro.nombre}</td>
                <td>{carro.talla}</td>
                <td>4</td>
                <td>{carro.precio}</td>
                <td>
                  <a
                    className="borrar"
                    href="/"
                    onClick={(e) => { borrarElemento(e, carro.id) }}
                  >x
                    </a>
                </td>
              </tr>
            </>
          ))}
        </table>
        <button className="botonAgregar">Continuar</button>
      </div>
    )

    return (
      <>
        <i className="fas fa-shopping-cart" id="carrito" onClick={this.controlarCarrito}>
          {alerta && <p id="notificacion" />}
        </i>
        {carrito.length > 0 && mostrarCarrito && carritoMostrar}
      </>
    )
  }
}

export default Carrito
