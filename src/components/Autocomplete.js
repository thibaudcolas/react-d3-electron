// @flow
import React, { Component } from "react";
import Autosuggest from "react-autosuggest";

import TextHighlight from "./TextHighlight";

import datasets, { data, related, idx } from "../datasets";
import type Dataset from "../datasets";

import "./Autocomplete.css";

type Props = {
  name: string,
  onUpdate: Function,
};

type State = {
  suggestions: Array<{
    title: string,
    suggestions: Array<Dataset>,
  }>,
  value: string,
};

class Autocomplete extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      suggestions: [
        {
          title: "Related datasets",
          suggestions: related,
        },
        {
          title: "All datasets",
          suggestions: data,
        },
      ],
      value: "",
    };

    (this: any).getSuggestionValue = this.getSuggestionValue.bind(this);
    (this: any).handleChange = this.handleChange.bind(this);
    (this: any).onFetchRequested = this.onFetchRequested.bind(this);
    (this: any).onSelected = this.onSelected.bind(this);
    (this: any).renderSuggestion = this.renderSuggestion.bind(this);
    (this: any).renderSectionTitle = this.renderSectionTitle.bind(this);
    (this: any).getSectionSuggestions = this.getSectionSuggestions.bind(this);
  }

  componentDidMount() {
    const autocomplete = document.querySelector('#autocomplete[type="text"]');

    if (autocomplete) {
      setTimeout(() => {
        autocomplete.focus();
      }, 100);
    }
  }

  getSuggestionValue(suggestion: Dataset) {
    return suggestion.label;
  }

  handleChange(e: Event, change: { reason: string, newValue: string }) {
    if (["enter", "click"].indexOf(change.reason) === -1) {
      const value = change.newValue;

      this.setState({
        value: value,
      });
    }
  }

  onFetchRequested(update: { reason: string, value: string }) {
    if (["enter", "click"].indexOf(update.reason) === -1) {
      const results = idx.search(update.value);

      this.setState({
        suggestions: [
          {
            title: "Related datasets",
            suggestions:
              results.length === 0
                ? related
                : related.filter((dat) =>
                    results.some((res) => res.ref === dat.id),
                  ),
          },
          {
            title: "All datasets",
            suggestions:
              results.length === 0
                ? data
                : results.map((result) => datasets[result.ref]),
          },
        ],
      });
    }
  }

  onSelected(
    e: Event,
    selection: {
      suggestion: Dataset,
    },
  ) {
    const { onUpdate } = this.props;
    onUpdate(selection.suggestion);
  }

  renderSuggestion(
    suggestion: Dataset,
    {
      query,
    }: {
      query: string,
    },
  ) {
    return (
      <p>
        {query !== suggestion.label ? (
          <TextHighlight highlight={query} text={suggestion.label} />
        ) : (
          <span>{suggestion.label}</span>
        )}
      </p>
    );
  }

  renderSectionTitle(section: { title: string, suggestions: Array<Dataset> }) {
    return <strong>{section.title}</strong>;
  }

  getSectionSuggestions(section: {
    title: string,
    suggestions: Array<Dataset>,
  }) {
    return section.suggestions;
  }

  render() {
    const { name } = this.props;
    const { suggestions, value } = this.state;

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onFetchRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        onSuggestionSelected={this.onSelected}
        alwaysRenderSuggestions={true}
        focusInputOnSuggestionClick={false}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
        multiSection={true}
        inputProps={{
          name: name,
          className: "react-autosuggest__input",
          onChange: this.handleChange,
          value: value,
        }}
      />
    );
  }
}

export default Autocomplete;
