import React, { Component } from 'react'
import ReactDOM from 'react-dom'

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
            backgroundColor: "rgba(0,0,0,0.3)"
          }}
          onClick={this.props.controlarModal}
          className={this.props.nombre}
        >
          <div
            style={{
              padding: 20,
              background: "#fff",
              borderRadius: "2px",
              display: "inline-block",
              minHeight: "300px",
              margin: "1rem",
              position: "relative",
              minWidth: "300px",
              boxShadow:
                "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
              justifySelf: "center"
            }}
          >
            <div>{this.props.children}</div>
            <hr />
            <button onClick={this.props.controlarModal}>Close</button>
          </div>
        </div>

      </div>,
      document.getElementById("modal-portal")
    );
  }
}

export default Modal
