import React from 'react'
import "../styles/Header.css"
import Carrito from "./Carrito"
import Modal from "./Modal"


function Header({ alerta, carrito, borrarElemento, verModal, controlarModal }) {
    return (
        <div className="header">
            <nav className="nav1" id="nav">
                <ul className="navItems">
                    <li>
                        <i className="fas fa-users-cog" id="admin" onClick={controlarModal}>
                        </i>
                    </li>
                    <li>
                        <Carrito alerta={alerta} carrito={carrito} borrarElemento={borrarElemento} />
                    </li>
                </ul>
            </nav>
            <section className="imagenesHeader">
                <div className="fondo1">
                    <img src={require('../img/img1.jpg')} alt="" className="fondo11" />
                    <img src={require('../img/img2.jpg')} alt="" className="fondo12" />
                    <img src={require('../img/img3.jpg')} alt="" className="fondo13" />
                </div>
                <div className="fondo2">
                    <img src={require('../img/img4.jpg')} alt="" className="fondo21" />
                    <img src={require('../img/img5.jpg')} alt="" className="fondo22" />
                    <img src={require('../img/img6.jpg')} alt="" className="fondo23" />
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
            {verModal ? <Modal controlarModal={controlarModal} verModal={verModal}>
                hi
            </Modal> :
                null}
        </div>
    )
}

export default Header
