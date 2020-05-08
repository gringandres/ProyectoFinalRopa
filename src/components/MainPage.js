import React, { Component, useState } from 'react'
import Header from '../components/Header'
import Body from '../components/Body';
import Footer from '../components/Footer';

import "../styles/Body.css"

class MainPage extends Component {
  state = {
    productos: [
      {
        id: "1",
        nombre: "Adidas Classic",
        talla: "L-M-S",
        precio: 20.000,
        img: require('../img/img7.jpg')
      },
      {
        id: "2",
        nombre: "Adidas",
        talla: "L-M",
        precio: 10.000,
        img: require('../img/img8.jpg')
      },
      {
        id: "3",
        nombre: "Adidas Top",
        talla: "M-S",
        precio: 30.000,
        img: require('../img/img7.jpg')
      },
      {
        id: "4",
        nombre: "Adidas Classic",
        talla: "L-M-S",
        precio: 20.000,
        img: require('../img/img8.jpg')
      },
      {
        id: "5",
        nombre: "Adidas",
        talla: "L-M",
        precio: 10.000,
        img: require('../img/img7.jpg')
      },
      {
        id: "6",
        nombre: "Adidas Top",
        talla: "M-S",
        precio: 30.000,
        img: require('../img/img8.jpg')
      }
    ],
    carrito: [],
    alerta: false,
    verModal: false
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

  controlarModal = () => {
    this.setState({ verModal: !this.state.verModal })
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
    const { productos, carrito, alerta, verModal } = this.state
    return (
      <>
        <Header 
          carrito={carrito} 
          alerta={alerta} 
          borrarElemento={this.borrarElemento} 
          verModal={verModal} 
          controlarModal={this.controlarModal} 
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
