import React from "react";
import "../styles/Header.css";
import "../styles/Modal.css";
import Carrito from "./Carrito";
import Modal from "./Modal";

function Header({
  alerta,
  carrito,
  borrarElemento,
  verModalRopa,
  verModalLogin,
  controlarModalLogin,
  controlarModalRopa,
  login,
  logearUsuario,
  usuarioNombre,
  contraseña,
  onHandle,
}) {
  return (
    <div className="header">
      <nav className="nav1" id="nav">
        <ul className="navItems">
          <li>
            <i
              className="fas fa-users-cog"
              id="admin"
              onClick={controlarModalLogin}
            ></i>
          </li>
          <li>
            {login === "cliente" && (
              <Carrito
                alerta={alerta}
                carrito={carrito}
                borrarElemento={borrarElemento}
                controlarModal={controlarModalRopa}
                verModalRopa={verModalRopa}
              />
            )}
          </li>
        </ul>
      </nav>
      <section className="imagenesHeader">
        <div className="fondo1">
          <img src={require("../img/img1.jpg")} alt="" className="fondo11" />
          <img src={require("../img/img2.jpg")} alt="" className="fondo12" />
          <img src={require("../img/img3.jpg")} alt="" className="fondo13" />
        </div>
        <div className="fondo2">
          <img src={require("../img/img4.jpg")} alt="" className="fondo21" />
          <img src={require("../img/img5.jpg")} alt="" className="fondo22" />
          <img src={require("../img/img6.jpg")} alt="" className="fondo23" />
        </div>
      </section>
      <section className="servicios">
        <ul className="serviciosList">
          <li>
            <i className="fas fa-tshirt"></i>
            <p>Cientos de Prendas</p>
          </li>
          <li>
            <i className="fas fa-truck"></i>
            <p>Servicio a domicilio</p>
          </li>
          <li>
            <i className="fas fa-hand-holding-usd"></i>
            <p>Pagos contrapuerta</p>
          </li>
        </ul>
      </section>
      {verModalLogin ? (
        <Modal
          controlarModal={controlarModalLogin}
          verModalLogin={verModalLogin}
          nombre="sign-in"
        >
          <h1>Por favor ingrese sus datos</h1>
          <form class="logeo" onSubmit={(e) => logearUsuario(e)}>
            <input
              type="text"
              placeholder="Usuario"
              name="usuarioNombre"
              value={usuarioNombre}
              onChange={onHandle}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="contraseña"
              value={contraseña}
              onChange={onHandle}
              required
            />
            <input type="submit" />
          </form>
        </Modal>
      ) : null}
    </div>
  );
}

export default Header;
