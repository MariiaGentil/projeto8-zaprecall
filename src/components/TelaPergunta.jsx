
import { useState } from 'react'
import LogoZR from '../assets/zr-logo.png'
import Cards from './Cards'
import Finalizacao from './Finalizacao'

function TelaPergunta({ setMudarTela, escolhaDeck, inputInicio, setEscolhaDeck, setInputInicio}) {
  const [acertos, setAcertos] = useState(0)
  const [classIcon, setClassIcon] = useState([])
  return (
    <div className="tela-pergunta">
      <div className="header">
        <img src={LogoZR} />
        <h1>ZapRecall</h1>
      </div>
      <div className="main">
        <Cards escolhaDeck={escolhaDeck} setAcertos={setAcertos} acertos={acertos} setClassIcon={setClassIcon} classIcon={classIcon} />
        <Finalizacao setMudarTela={setMudarTela} setAcertos={setAcertos} acertos={acertos} escolhaDeck={escolhaDeck} classIcon={classIcon} setClassIcon={setClassIcon} inputInicio={inputInicio} setEscolhaDeck={setEscolhaDeck} setInputInicio={setInputInicio}/>
      </div>
    </div>
  )
}

export default TelaPergunta