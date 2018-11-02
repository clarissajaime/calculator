import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nums: [0,1,2,3,4,5,6,7,8,9],
      result: 0,
      operators: ["+", "-", "/", "*"]
    }
  }
  num_button_click = (event) => {
    const {result} = this.state
    if (this.state.result === 0) {
      this.setState({
        result: event.target.name
      })
    } else {
      this.setState({
        result: result.concat(event.target.name)
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div id="calculation">
          {this.state.result}
        </div>
        <div id="buttons">
          {this.state.nums.map((num) => {
            return <button name={num} onClick={this.num_button_click}>{num}</button>
          }
        )}
          {this.state.operators.map((operators) => {
            return <button name={operators}>{operators}</button>
          }
        )}
        </div>
      </div>
    );
  }
}

export default App;
