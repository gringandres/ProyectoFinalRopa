import React, { Component } from 'react'
import Tabla from './Tabla'
import ModalTabla from './ModalTabla'

class Carrito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarCarrito: false,
      valor: 0
    }
  }

  controlarCarrito = () => {
    this.setState({
      mostrarCarrito: !this.state.mostrarCarrito
    })
  }

  render() {
    const { mostrarCarrito, cantidadElegida } = this.state
    const { alerta, carrito, borrarElemento, controlarModal, verModalRopa } = this.props
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
              <Tabla
                key={carro.id}
                img={carro.img}
                precio={carro.precio}
                nombre={carro.nombre}
                talla={carro.talla}
                cantidad={carro.cantidad}
                id={carro.id}
                borrarElemento={borrarElemento}
              />
            </>
          ))}
        </table>
        <button
          className="botonAgregar"
          onClick={() => {
            controlarModal()
            this.controlarCarrito()
          }}
        >
          Continuar
        </button>
      </div>
    )

    return (
      <>
        <i className="fas fa-shopping-cart" id="carrito" onClick={this.controlarCarrito}>
          {alerta && <p id="notificacion" />}
        </i>
        {carrito.length > 0 && mostrarCarrito && carritoMostrar}
        {verModalRopa ?
          <ModalTabla
            controlarModal={controlarModal}
            borrarElemento={borrarElemento}
            carrito={carrito}
            controlarCantidad={this.controlarCantidad}
            cantidadElegida={cantidadElegida}
          /> : null}

      </>
    )
  }
}

export default Carrito
