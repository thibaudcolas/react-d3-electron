// @flow
import React, { Component } from "react";

import Modal from "../components/Modal";

type Props = {
  id: string,
  label: string,
  children: any,
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
      isOpen: false,
    };

    (this: any).onToggleModal = this.onToggleModal.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ isOpen: false });
  }

  onToggleModal(isOpen: boolean, e: Event) {
    this.setState({ isOpen });

    e.preventDefault();
  }

  render() {
    const { id, label, children } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <button
          id={id}
          className="btn btn--block"
          onClick={this.onToggleModal.bind(null, true)}
        >
          {label}
        </button>
        <Modal
          title=""
          isOpen={isOpen}
          closeCallback={this.onToggleModal.bind(null, false)}
        >
          {children}
        </Modal>
      </div>
    );
  }
}

export default ModalTrigger;
