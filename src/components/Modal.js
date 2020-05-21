import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <div  
          // onClick={this.props.controlarModal}
          className={this.props.nombre}
        >
          <div className="logeo">
            <div>{this.props.children}</div>
            <hr />
            <button  className="cerrarModal" onClick={this.props.controlarModal} >X</button>
          </div>
        </div>

      </div>,
      document.getElementById("modal-portal")
    );
  }
}

export default Modal
