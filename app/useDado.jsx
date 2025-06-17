import { useState } from "react";

export default function useDado() {
  const [dado, setDado] = useState(generarNumeroAleatorio());

  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function generarDado() {
    setDado(generarNumeroAleatorio());
  }

  return {
    dado,
    generarDado,
  };
}
