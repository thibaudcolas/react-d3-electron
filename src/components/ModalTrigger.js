// @flow
import React, { Component } from "react";

import Modal from "../components/Modal";

type Props = {
  id: string,
  label: string,
  iconName: string,
  modalTitle: string,
  children: any,
  isOpen: boolean,
};

type State = {
  isOpen: boolean,
};

/**
 * A generic modal trigger: button, modal, and state.
 */
class ModalTrigger extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
    };

    (this: any).onToggleModal = this.onToggleModal.bind(this);
    (this: any).toggleModal = this.toggleModal.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      isOpen: nextProps.isOpen,
    });
  }

  onToggleModal(isOpen: boolean, e: Event) {
    this.toggleModal(isOpen);

    e.preventDefault();
  }

  toggleModal(isOpen: boolean = !this.state.isOpen) {
    this.setState({
      isOpen: isOpen,
    });
  }

  render() {
    const { id, iconName, label, modalTitle, children } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <button
          id={id}
          className="btn btn--block"
          onClick={this.onToggleModal.bind(this, true)}
        >
          {label}
        </button>
        <Modal
          title={modalTitle}
          iconName={iconName}
          isOpen={isOpen}
          closeCallback={this.onToggleModal.bind(this, false)}
        >
          {children}
        </Modal>
      </div>
    );
  }
}

export default ModalTrigger;
