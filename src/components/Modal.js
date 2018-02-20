import React, { Component } from "react";
import ReactModal from "react-modal";

import "./Modal.css";

// Necessary for the modals to work.
ReactModal.setAppElement(document.querySelector("[data-mount]"));

type Props = {
  title: string,
  iconName: string,
  children: Node,
  isOpen: boolean,
  closeCallback: func,
};

/**
 * A generic modal. Handles common affordances & styles.
 */
class Modal extends Component<Props, {}> {
  constructor(props) {
    super(props);

    (this: any).onDocumentKeyUp = this.onDocumentKeyUp.bind(this);
    (this: any).onDocumentClick = this.onDocumentClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keyup", this.onDocumentKeyUp);
    document.addEventListener("click", this.onDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.onDocumentKeyUp);
    document.removeEventListener("click", this.onDocumentClick);
  }

  onDocumentKeyUp(e) {
    const ESC = 27;

    if (e.keyCode === ESC) {
      this.props.closeCallback(e);
    }
  }

  onDocumentClick(e) {
    const isOverlay = e.target.matches(".ReactModal__Overlay");
    const isModal = e.target.matches(".ReactModal__Content");
    const isInModal = !!e.target.closest(".ReactModal__Content");

    if (isOverlay && !isModal && !isInModal) {
      this.props.closeCallback(e);
    }
  }

  render() {
    const { title, children, isOpen, closeCallback } = this.props;

    return (
      <ReactModal
        key={title}
        isOpen={isOpen}
        closeTimeoutMS={1}
        onRequestClose={() => {}}
      >
        <div className="modal modal__center">
          <div className="modal__header [ grid grid-auto ]">
            <div className="three-quarters" />
            <button
              className="btn modal__close one-quarter"
              onClick={closeCallback}
            >
              Close
            </button>
          </div>
          <div className="modal__content">{children}</div>
        </div>
      </ReactModal>
    );
  }
}

export default Modal;
