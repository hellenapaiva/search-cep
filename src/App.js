import React, { useState } from "react";
import "./styles.css";
import { BiSearchAlt } from "react-icons/bi";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [saveCep, setSaveCep] = useState({});

  async function handleSearch(event) {
    event.preventDefault();
    if (input === "") {
      alert("Digite o CEP que deseja buscar...");
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setSaveCep(response.data);
      setInput("");
    } catch {
      console.error("Erro ao buscar CEP.");
      setInput("");
    }
  }

  console.log();

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <BiSearchAlt size={25} color="#fff" />
        </button>
      </div>
      {Object.keys(saveCep).length > 0 && (
        <main className="main">
          <h2>CEP: {saveCep.cep} </h2>
          <span> {saveCep.logradouro}</span>
          <span>Complemento: {saveCep.complemento}</span>
          <span>Bairro: {saveCep.bairro}</span>
          <span>
            {saveCep.localidade} - {saveCep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
