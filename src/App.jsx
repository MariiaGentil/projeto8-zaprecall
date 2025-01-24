import { useState } from 'react'
import TelaPrincipal from './components/TelaPrincipal'
import TelaPergunta from './components/TelaPergunta'

function App() {
   const[mudarTela, setMudarTela] = useState('telaprincipal')
   return(
      mudarTela === 'telaprincipal' ? <TelaPrincipal setMudarTela={setMudarTela}/> : <TelaPergunta setMudarTela={setMudarTela}/>
   )
}

export default App
