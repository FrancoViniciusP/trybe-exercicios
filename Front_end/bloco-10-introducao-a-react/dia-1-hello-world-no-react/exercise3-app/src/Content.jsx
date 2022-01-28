import React, { Component } from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

const printStatus = ({ conteudo, bloco, status }) => {
    return (
      <div>
        <li>O conteúdo é: {conteudo}  </li> 
        <li>Status: {status}  </li> 
        <li>Bloco: {bloco} </li> 
        <br></br>
      </div> 
       
    )
}

class Content extends Component {
    render() {
        return ( <span> { conteudos.map(conteudo => printStatus(conteudo)) } </span> );
     
    }
}

export default Content;