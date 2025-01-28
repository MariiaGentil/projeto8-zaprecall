import { useState } from 'react'
import LogoZR from '../assets/zr-logo.png'
import DeckOptions from './DeckOptions'
import { use } from 'react'


function TelaPrincipal({ setMudarTela, setEscolhaDeck, escolhaDeck, setInputInicio, inputInicio}) {
    return (
        <div className="tela-principal">
            <img src={LogoZR} />
            <h1>ZapRecall</h1>
            <input type="number" className="option meta" placeholder="Digite sua meta de zaps..." onChange={e => {setInputInicio(e.target.value)}} />
            <DeckOptions setEscolhaDeck={setEscolhaDeck} escolhaDeck={escolhaDeck} />
            <button className="botao-inicial" onClick={() => {validarDeck(setMudarTela, escolhaDeck, inputInicio)}}>Iniciar Recall!</button>
            {JSON.parse(escolhaDeck) !== null && inputInicio !== '' ? <></> : <p>Selecione as opções para iniciar !</p>}
        </div>
    )
}

function validarDeck(setMudarTela, escolhaDeck, inputInicio) {
    if(JSON.parse(escolhaDeck) !== null && inputInicio !== ''){
        setMudarTela('telapergunta')
    }
}

export default TelaPrincipal