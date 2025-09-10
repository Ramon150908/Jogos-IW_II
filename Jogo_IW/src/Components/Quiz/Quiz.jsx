import React from 'react'
import './Quiz.css'

  const Quiz = () => {
    return (
      <div className='container'>
        <h1>Quiz App</h1>
        <hr />
        <h2>Qual dispositivo é necessario para a conexão com a internet</h2>
        <ul>
            <li>Modem</li>
            <li>Roteador</li>
            <li>Cabo LAN</li>
            <li>Pendrive</li>
        </ul>
        <button>Próximo</button>
        <div className="index">1 de 5 perguntas</div>
      </div>
    )
  }

  export default Quiz