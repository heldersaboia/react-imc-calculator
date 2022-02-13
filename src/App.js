import { useState } from "react";
import "./app.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");

  function calcularIMC() {
    const alturaCalculada = altura / 100;
    const imc = peso / (alturaCalculada * alturaCalculada);
    let mensagem = "";

    if (imc < 18.6)
      mensagem = `Seu IMC é: ${imc.toFixed(2)}, você está abaixo do peso!`;
    else if (imc >= 18.6 && imc < 24.9)
      mensagem = `Seu IMC é: ${imc.toFixed(
        2
      )}, você está no peso ideal. PARABÉNS!`;
    else if (imc >= 24.9 && imc < 34.9)
      mensagem = `Seu IMC é: ${imc.toFixed(
        2
      )}, você está levemente acima do peso!`;
    else if (imc > 34.9)
      mensagem = `Seu IMC é: ${imc.toFixed(2)}, você está obeso. ATENÇÃO!`;

    setMensagem(mensagem);
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) ex: 87"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (cm) ex: 168"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>Calcular</button>

        <h2>{mensagem}</h2>
      </div>
    </div>
  );
}
