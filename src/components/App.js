// @flow
import React, { PureComponent } from "react";

import ModalTrigger from "./ModalTrigger";
import Autocomplete from "./Autocomplete";
import ExampleChart from "./ExampleChart";

import datasets from "../datasets";
import type { Dataset } from "../datasets";

import "./App.css";

type Props = {};

type State = {
  datasetOne: Dataset,
  datasetTwo: Dataset,
};

class App extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      datasetOne: datasets["270"],
      datasetTwo: datasets["49"],
    };

    (this: any).updateOne = this.updateOne.bind(this);
    (this: any).updateTwo = this.updateTwo.bind(this);
  }

  updateOne(dataset: Dataset) {
    this.setState({
      datasetOne: dataset,
    });
  }

  updateTwo(dataset: Dataset) {
    this.setState({
      datasetTwo: dataset,
    });
  }

  render() {
    const { datasetOne, datasetTwo } = this.state;

    return (
      <div className="App">
        <div>
          <ModalTrigger id="blue" label={`Blue: ${datasetOne.label}`}>
            <h3>
              Comparing <br />
              {datasetTwo.label}
              <br /> to:
            </h3>
            <Autocomplete name="autocomplete" onUpdate={this.updateOne} />
          </ModalTrigger>
          <ModalTrigger id="red" label={`Red: ${datasetTwo.label}`}>
            <h3>
              Comparing <br />
              {datasetOne.label}
              <br /> to:
            </h3>
            <Autocomplete name="autocomplete" onUpdate={this.updateTwo} />
          </ModalTrigger>
          <ExampleChart data={[datasetOne.data, datasetTwo.data]} />
        </div>
      </div>
    );
  }
}

export default App;
