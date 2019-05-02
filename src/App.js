import React, { Component } from "react";

export default class App extends Component {
  state = {
    counter: 0,
    error: false
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        {this.state.error && (
          <p data-test="error-message">can not go below 0</p>
        )}
        <button
          data-test="increment-button"
          onClick={() =>
            this.state.error
              ? this.setState({ error: false, counter: this.state.counter + 1 })
              : this.setState({ counter: this.state.counter + 1 })
          }
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() =>
            this.state.counter === 0
              ? this.setState({ error: true })
              : this.setState({ counter: this.state.counter - 1 })
          }
        >
          Decrement counter
        </button>
      </div>
    );
  }
}
