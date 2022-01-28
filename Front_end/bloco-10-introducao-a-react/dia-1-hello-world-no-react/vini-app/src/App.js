import React from 'react';

const myTasks = ['Ir ao shopping', 'Estudar', 'Comprar pó de café', 'Entregar Projeto', 'Tocar violão']
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return ( <ul>{ myTasks.map( task => Task(task)) } </ul> );
}

export default App;
