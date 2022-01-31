
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
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }

  handleClick1() {
    console.log("clicou no botão 1");
    this.setState(({ numeroDeCliques1 }, _props) => 
      ({numeroDeCliques1: numeroDeCliques1 + 1})
    );
    console.log(this.state.numeroDeCliques1); 
  }
 
  // o valor é impresso no console antes da atualização do state, devido a assincronissidade da função setState.
  
  handleClick2() {
    console.log("clicou no botão 2");
    this.setState(({ numeroDeCliques2 }, _props) => 
      ({numeroDeCliques2: numeroDeCliques2 + 1})
    );
    console.log(this.state.numeroDeCliques2);
  }
  
  handleClick3() {
    console.log("clicou no botão 3");
    this.setState(({ numeroDeCliques3 }, _props) => 
      ({numeroDeCliques3: numeroDeCliques3 + 1})
    );
    console.log(this.state.numeroDeCliques3);
  }
  
  render() {
    return (
      <div className="App">
        <button className='red' onClick={this.handleClick1} >{this.state.numeroDeCliques1}</button>
        <button className='blue' onClick={this.handleClick2} >{this.state.numeroDeCliques2}</button>
        <button className='green' onClick={this.handleClick3} >{this.state.numeroDeCliques3}</button>
      </div>
    );
  }
}

export default App;
