import { useState } from 'react'
import TelaPrincipal from './components/TelaPrincipal'
import TelaPergunta from './components/TelaPergunta'

function App() {
   const[mudarTela, setMudarTela] = useState('telaprincipal')
   const [escolhaDeck, setEscolhaDeck] = useState(null)
   return(
      mudarTela === 'telaprincipal' ? <TelaPrincipal setMudarTela={setMudarTela} setEscolhaDeck={setEscolhaDeck} escolhaDeck={escolhaDeck} /> : <TelaPergunta setMudarTela={setMudarTela} escolhaDeck={escolhaDeck}/>
   )
}

export default App
