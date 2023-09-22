import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(5);
  const abecedario = 'abcdefghijlmnopqrstuvwxyz';
  const [letra, setLetra] = useState(10);

  const siguienteLetra = () => {
    const proximoIndice = (letra + 1) % abecedario.length;
  setLetra(proximoIndice);
      };

  return (
    <>
      <div>
      </div>

      <div className="cards">

        <div className="card">
          <h1>
            ABC
          </h1>
          <p>
            {abecedario[letra]}
          </p>
          <button onClick={siguienteLetra}>
            Click
          </button>
        </div>
      
        <div className="card">
          <h1>
            N°
          </h1>
          <p>
            {count}
          </p>
          <button onClick={() => setCount((count) => count + 1)}>
            Click 
          </button>
        </div>
      </div>

    </>
  )
}

export default App
