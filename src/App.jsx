import { useState } from 'react'
import TelaPrincipal from './components/TelaPrincipal'
import TelaPergunta from './components/TelaPergunta'

function App() {
   const[mudarTela, setMudarTela] = useState('telaprincipal')
   const [inputInicio, setInputInicio] = useState('')
   const [escolhaDeck, setEscolhaDeck] = useState(null)
   return(
      mudarTela === 'telaprincipal' ? <TelaPrincipal setMudarTela={setMudarTela} setEscolhaDeck={setEscolhaDeck} escolhaDeck={escolhaDeck} setInputInicio={setInputInicio} inputInicio={inputInicio} /> : <TelaPergunta setMudarTela={setMudarTela} escolhaDeck={escolhaDeck} inputInicio={inputInicio} setInputInicio={setInputInicio} setEscolhaDeck={setEscolhaDeck}/>
   )
}

export default App
