import { useState } from 'react'
import LogoZR from '../assets/zr-logo.png'
import DeckOptions from './DeckOptions'


function TelaPrincipal({ setMudarTela, setEscolhaDeck, escolhaDeck}) {
    const [erroDeck, setErroDeck] = useState(false)
    return (
        <div className="tela-principal">
            <img src={LogoZR} />
            <h1>ZapRecall</h1>
            <input type="number" className="option meta" placeholder="Digite sua meta de zaps..." />
            <DeckOptions setEscolhaDeck={setEscolhaDeck} escolhaDeck={escolhaDeck} />
            <button className="botao-inicial" onClick={() => {validarDeck(setMudarTela, escolhaDeck)}}>Iniciar Recall!</button>
            {JSON.parse(escolhaDeck) !== null ? <></> : <p>Selecione seu deck</p>}
        </div>
    )
}

function validarDeck(setMudarTela, escolhaDeck) {
    if(JSON.parse(escolhaDeck) !== null){
        setMudarTela('telapergunta')
    }
}

export default TelaPrincipal