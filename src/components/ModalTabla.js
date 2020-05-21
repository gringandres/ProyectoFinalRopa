import React, { Component } from 'react'
import Modal from './Modal'
import TablaEditable from './TablaEditable'

export class ModalTabla extends Component {
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
                  img={carro.img}
                  precio={carro.precio}
                  nombre={carro.nombre}
                  talla={carro.talla}
                  cantidad={carro.cantidad}
                  id={carro.id}
                  borrarElemento={borrarElemento}
                  controlarModal={controlarModal}
                  carrito={carrito.length}
                />
              </>
            ))}
          </table>
          <button>comprar</button>
        </Modal>
      </>
    )
  }
}

export default ModalTabla
