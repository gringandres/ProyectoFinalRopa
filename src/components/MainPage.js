import React, { Component } from 'react'
import Header from '../components/Header'
import Body from '../components/Body';
import Footer from '../components/Footer';
import datos from '../datos/prendas'

import "../styles/Body.css"

class MainPage extends Component {
  state = {
    productos: datos,
    carrito: [],
    alerta: false,
    verModalLogin: false,
    verModalRopa: false
  }

  agregarCarrito = producto => {
    this.setState({
      carrito: [
        ...this.state.carrito,
        producto
      ],
      alerta: true
    })
  }

  controlarModalRopa = () => {
    this.setState({ verModalRopa: !this.state.verModalRopa })
  }

  controlarModalLogin = () => {
    this.setState({ verModalLogin: !this.state.verModalLogin })
  }

  borrarElemento = (e, id) => {
    e.preventDefault();
    let newArray = []
    this.state.carrito.forEach(carro => {
      if (id !== carro.id) {
        return newArray.push(carro)
      }
    })
    this.setState({
      carrito: newArray,
      alerta: newArray.length > 0 ? true : false
    })
  }

  render() {
    const { productos, carrito, alerta, verModalLogin, verModalRopa } = this.state
    return (
      <>
        <Header
          carrito={carrito}
          alerta={alerta}
          borrarElemento={this.borrarElemento}
          verModalLogin={verModalLogin}
          verModalRopa={verModalRopa}
          controlarModalRopa={this.controlarModalRopa}
          controlarModalLogin={this.controlarModalLogin}
        />
        <section className="productos">
          <h1>Nuestros Productos</h1>
          <div className="container" id="container">
            {productos.map(producto => (
              <Body
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                talla={producto.talla}
                cantidad={producto.cantidad}
                precio={producto.precio}
                img={producto.img}
                agregarCarrito={this.agregarCarrito}
              />
            ))}
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default MainPage
