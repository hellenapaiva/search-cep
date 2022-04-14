import React, { useState } from "react";
import "./styles.css";
import { BiSearchAlt } from "react-icons/bi";

function App() {
  const [input, setInput] = useState();

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..." />
        <button className="buttonSearch">
          <BiSearchAlt size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 79003222 </h2>
        <span> Rua Só testando</span>
        <span> Complemento: Algum complemento</span>
        <span> Bairro: Vila Rosa</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  );
}

export default App;
