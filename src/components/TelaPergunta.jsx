
import { useState } from 'react'
import LogoZR from '../assets/zr-logo.png'
import Cards from './Cards'
import Finalizacao from './Finalizacao'

function TelaPergunta({ setMudarTela }) {
  const [mostrarFinalizacao, setMostrarFinalizacao] = useState('')
  const [receberRespostas, setReceberRespostas] = useState('')

  return (
    <div className="tela-pergunta">
      <div className="header">
        <img src={LogoZR} />
        <h1>ZapRecall</h1>
      </div>
      <div className="main">
        <Cards setMostrarFinalizacao={setMostrarFinalizacao} setReceberRespostas={setReceberRespostas}/>
        {mostrarFinalizacao !== '' ? <Finalizacao setMudarTela={setMudarTela} receberRespostas={receberRespostas} /> : <></>}
      </div>
    </div>
  )
}

export default TelaPergunta