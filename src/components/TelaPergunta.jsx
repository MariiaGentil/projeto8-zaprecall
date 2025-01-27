
import { useState } from 'react'
import LogoZR from '../assets/zr-logo.png'
import Cards from './Cards'
import Finalizacao from './Finalizacao'

function TelaPergunta({ setMudarTela, escolhaDeck }) {
  const [acertos, setAcertos] = useState(0)
  const [concluidos, setConcluidos] = useState(0)

  return (
    <div className="tela-pergunta">
      <div className="header">
        <img src={LogoZR} />
        <h1>ZapRecall</h1>
      </div>
      <div className="main">
        <Cards escolhaDeck={escolhaDeck} setAcertos={setAcertos} acertos={acertos} setConcluidos={setConcluidos} concluidos={concluidos} />
        <Finalizacao setMudarTela={setMudarTela} acertos={acertos} escolhaDeck={escolhaDeck} concluidos={concluidos} />
      </div>
    </div>
  )
}

export default TelaPergunta