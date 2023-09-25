import React, { Component } from 'react';

import './styles.css';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      displayName: ''
    };
  }

  handleChange = evt => {
    this.setState({
      name: evt.target.value
    });
  };

  handleClick = evt => {
    this.setState({
      displayName: this.state.name
    });
  };

  render() {
    return (
      <>
        <h1>A.S.D. Learning Zone</h1>
        <p>
          Hi there, {this.state.displayName || "We haven't been introduced"}
        </p>
        <p>Enter your name below so we can get better acquainted</p>
        <input value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Update name</button>
        <p>Enter a username below to get organized</p>
        <input value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Update name</button>
        <p>Enter a password for privacy</p>
        <input value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Update name</button>
      </>
    );
  }
}

export default App;