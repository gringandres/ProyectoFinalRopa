import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <div
          style={{
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
          className={this.props.nombre}
        >
          <div className="logeo">
            <div>{this.props.children}</div>
            <hr />
            <button className="cerrarModal" onClick={this.props.controlarModal}>
              X
            </button>
          </div>
        </div>
      </div>,
      document.getElementById("modal-portal")
    );
  }
}

export default Modal;
