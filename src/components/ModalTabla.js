import React, { Component } from 'react'
import Modal from './Modal'
import TablaEditable from './TablaEditable'

class ModalTabla extends Component {
  state = {
    cantidadElegida: [],
    valor: 0,
    mostrar: false
  }

  cantidadEditar = (e, id) => {
    const { carrito } = this.props
    const valor = e.target.value
    carrito.forEach(carro => {
      if (carro.id === id) {
        if (carro.cantidad < valor) {
          alert("No hay suficiente")
        } else {
          this.controlarCantidad(id, valor)
        }
      }
    })
  }

  controlarCantidad = (id, valor) => {
    this.setState({
      cantidadElegida: [
        ...this.state.cantidadElegida,
        { id, valor }
      ]
    })
    const valorPrendas = this.calcularTotal()
    this.setState({
      valor: valorPrendas
    })
  }

  calcularTotal = () => {
    const { carrito } = this.props
    const { cantidadElegida, valor } = this.state
    let valorPartes = 0
    let cantidad = 0
    if (cantidadElegida.length > 0) {
      carrito.forEach(carro => {
        cantidad = cantidadElegida.find(elegida => {
          if (elegida.id === carro.id) {
            cantidad = elegida.valor
          }
          return cantidad
        })
        valorPartes = valorPartes + (cantidad.valor * carro.precio)
      })
    }
    return (valorPartes + valor)
  }

  render() {
    const { controlarModal, borrarElemento, carrito } = this.props

    return (
      <>
        <Modal
          controlarModal={controlarModal}
          name="ropa-modal"
        >
          <table id="detallePedido">
            <tr>
              <th>Imagen</th>
              <th>Referencia</th>
              <th>Escoge la Talla</th>
              <th>Cantidad Disponible</th>
              <th>Cantidad a Comprar</th>
              <th>Precio</th>
            </tr>
            {carrito.map(carro => (
              <>
                <TablaEditable
                  key={carro.id}
                  img={carro.img}
                  precio={carro.precio}
                  nombre={carro.nombre}
                  talla={carro.talla}
                  cantidad={carro.cantidad}
                  id={carro.id}
                  borrarElemento={borrarElemento}
                  controlarModal={controlarModal}
                  carrito={carrito.length}
                  cantidadEditar={this.cantidadEditar}
                />
              </>
            ))}
          </table>
          <button>comprar</button>
          <button onClick={() => this.setState({ mostrar: true })}>Calcular Total</button>
          {this.state.mostrar &&
            <label>{this.state.valor}</label>
          }
        </Modal>
      </>
    )
  }
}

export default ModalTabla
