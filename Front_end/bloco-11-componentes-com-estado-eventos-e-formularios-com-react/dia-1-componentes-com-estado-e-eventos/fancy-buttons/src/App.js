
import React, { Component } from 'react'
import './App.css';



function handleClick2() {
  console.log("clicou no botão 2");
}

function handleClick3() {
  console.log("clicou no botão 3");
}


class App extends Component {

  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    console.log(this);
  }

  handleClick1() {
    console.log(this);
    console.log("clicou no botão 1");
  }
  
  handleClick2() {
    console.log(this);
    console.log("clicou no botão 2");
  }

  handleClick3() {
    console.log(this);
    console.log("clicou no botão 3");
  }
  
  render() {
    console.log(this);
    return (
      <div className="App">
        <button onClick={this.handleClick1} >Botão 1</button>
        <button  onClick={this.handleClick2} >Botão 2</button>
        <button  onClick={this.handleClick3} >Botão 3</button>
      </div>
    );
  }
}

export default App;
