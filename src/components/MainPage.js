import React, { Component } from 'react'
import Header from '../components/Header'
import Body from '../components/Body';
import BodyAdmin from '../components/BodyAdmin';
import Footer from '../components/Footer';
import datos from '../datos/prendas'

import "../styles/Body.css"

class MainPage extends Component {
  state = {
    productos: datos,
    carrito: [],
    alerta: false,
    verModalLogin: false,
    verModalRopa: false,
    login: "admin"
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
    const { productos, carrito, alerta, verModalLogin, verModalRopa, login } = this.state
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
          login={login}
        />
        <section className="productos">
          <h1>Nuestros Productos</h1>
          <div className="container" id="container">
            {login === "cliente" && productos.map(producto => {
              let cuerpo = ""
              if (producto.dispobile) {
                cuerpo = (
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
                )
              }
              return cuerpo
            })}
            {login === "admin" && productos.map(producto => (
              <BodyAdmin
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                talla={producto.talla}
                cantidad={producto.cantidad}
                precio={producto.precio}
                img={producto.img}
                dispobile={producto.dispobile}
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
