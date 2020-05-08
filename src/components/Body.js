import React from 'react'
import "../styles/Body.css"

function Body({ id, nombre, talla, precio, img, agregarCarrito }) {

  const botonAgregar = e => {
    e.preventDefault()
    const selecionado = { id, nombre, talla, precio, img }
    agregarCarrito(selecionado)
  }

  return (
    <div className="card">
      <img src={img} alt="" />
      <h4>{nombre}</h4>
      <p>Tallas</p>
      <p>{talla}</p>
      <p id="precio" className="precio">Precio <span>{precio}$</span></p>
      <button className="botonAgregar" onClick={botonAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default Body
