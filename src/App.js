import { useState } from 'react'

import './App.css'
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'

function App() {
  const [nome, setNome] = useState()
  return (
    <div className="App">
      {/* <h1>Renderização Condicional</h1>  esse titulo é para o componente Condicional*/}
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  )
}

export default App;
