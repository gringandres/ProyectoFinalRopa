import React, { Component } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import BodyAdmin from "../components/BodyAdmin";
import Footer from "../components/Footer";
import { BASE_LOCAL_ENDPOINT } from "../constants";
import axios from "axios";

import "../styles/Body.css";

class MainPage extends Component {
  state = {
    productos: {
      info: [],
      error: false,
    },
    usuarios: {
      info: [],
      error: false,
    },
    usuarioActual: {
      usuario: "",
      contraseña: "",
      tipo: "",
    },
    usuarioNombre: "",
    contraseña: "",
    productoError: false,
    usuariosError: false,
    carrito: [],
    alerta: false,
    verModalLogin: false,
    verModalRopa: false,
    login: "cliente",
  };

  componentDidMount() {
    this.cargarProductos();
    this.cargarUsuarios();
  }

  cargarProductos = () => {
    axios
      .get(`${BASE_LOCAL_ENDPOINT}/prendas`)
      .then((response) => {
        this.setState({
          productos: {
            info: response.data,
            error: "",
          },
          productoError: false,
        });
      })
      .catch((error) => {
        this.setState({
          productos: {
            error: error.message,
          },
        });
      });
  };

  cargarUsuarios = () => {
    axios
      .get(`${BASE_LOCAL_ENDPOINT}/usuarios`)
      .then((response) => {
        this.setState({
          usuarios: {
            info: response.data,
            error: "",
          },
          usuariosError: false,
        });
      })
      .catch((error) => {
        this.setState({
          usuarios: {
            error: error.message,
          },
        });
      });
  };

  borrarPrenda = (e, id) => {
    e.preventDefault();
    axios
      .delete(`${BASE_LOCAL_ENDPOINT}/prendas/${id}`) //deleats the worker with the same id
      .then(() => {
        this.cargarProductos();
      })
      .catch(() => {
        this.setState({ productoError: true });
      });
  };

  agregarCarrito = (producto) => {
    this.setState({
      carrito: [...this.state.carrito, producto],
      alerta: true,
    });
  };

  controlarModalRopa = () => {
    this.setState({ verModalRopa: !this.state.verModalRopa });
  };

  controlarModalLogin = () => {
    this.setState({ verModalLogin: !this.state.verModalLogin });
  };

  borrarElemento = (e, id) => {
    e.preventDefault();
    let newArray = [];
    this.state.carrito.forEach((carro) => {
      if (id !== carro.id) {
        return newArray.push(carro);
      }
    });
    this.setState({
      carrito: newArray,
      alerta: newArray.length > 0 ? true : false,
    });
  };

  onHandle = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    this.setState({
      [field]: value,
    });
  };

  logearUsuario = (e) => {
    e.preventDefault();
    const { usuarioNombre, contraseña, usuarios } = this.state;
    let bandera = true;
    usuarios.info.forEach((usuario) => {
      debugger;
      if (bandera === true) {
        if (usuario.login === usuarioNombre) {
          if (usuario.contraseña === contraseña) {
            this.setState({
              usuarioActual: {
                usuario: usuarioNombre,
                contraseña: contraseña,
                tipo: usuario.tipo,
              },
            });
            bandera = false;
          }
        }
      }
      return bandera;
    });
    if (!bandera) {
      this.setState({
        usuarioNombre: "",
        contraseña: "",
      });
      this.controlarModalLogin();
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  };

  render() {
    const {
      productos,
      carrito,
      alerta,
      verModalLogin,
      verModalRopa,
      usuarioActual,
      productoError,
      usuarioNombre,
      contraseña,
    } = this.state;
    const { tipo } = usuarioActual;
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
          login={tipo}
          logearUsuario={this.logearUsuario}
          usuarioNombre={usuarioNombre}
          contraseña={contraseña}
          onHandle={this.onHandle}
        />
        <section className="productos">
          <h1>Nuestros Productos</h1>
          {productoError ? (
            <p>Un Error a ocurrido cargando los productos</p>
          ) : (
            <div className="container" id="container">
              {tipo === "admin"
                ? productos.info.map((producto) => (
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
                      borrarPrenda={this.borrarPrenda}
                    />
                  ))
                : productos.info.map((producto) => {
                    let cuerpo = "";
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
                      );
                    }
                    return cuerpo;
                  })}
              {tipo === "admin" && <button> Agregar Prenda </button>}
            </div>
          )}
        </section>
        <Footer />
      </>
    );
  }
}

export default MainPage;
