import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <div>
      <h1>Hora Certa!</h1>
      <h2>Horário de Brasília {new Date().toLocaleTimeString('pt', { hour24: true })}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);