import LogoZR from '../assets/zr-logo.png'
import DeckOptions from './DeckOptions'


function TelaPrincipal({setMudarTela}){
    return (
        <div className="tela-principal">
            <img src={LogoZR} />
            <h1>ZapRecall</h1>
            <input type="number" className="option meta" placeholder="Digite sua meta de zaps..."/>
                <DeckOptions />
            <button className="botao-inicial" onClick={() => {setMudarTela('telapergunta')}}>Iniciar Recall!</button>
        </div>
    )
}

export default TelaPrincipal