import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input/Input'
import Button from './components/Button/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='Container'>
      <h1>Registro de Estudiantes</h1>

      <Input 
        Dato="Nombre: "
      />
      <Input 
        Dato="Edad: "
      />
      <Input 
        Dato="Carnet: "
      />
      <br />
      <br />
      <Button />
    </div>

    
      
    </>
  )
}

export default App
