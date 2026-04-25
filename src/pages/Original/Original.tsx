import { useState } from "react";
import "./Original.css";

export default function Original() {
  const [personaje, setPersonaje] = useState<any>(null);

  const obtenerAleatorio = async () => {
    const id = Math.floor(Math.random() * 10) + 1;

    const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
    const data = await res.json();

    setPersonaje(data.result);
  };

  return (
    <div>
      <h1>Personaje Aleatorio</h1>

      <button onClick={obtenerAleatorio}>
        Obtener personaje
      </button>

      {personaje && (
        <div className="card">
          <p>Nombre: {personaje.properties.name}</p>
          <p>Género: {personaje.properties.gender}</p>
          <p>Altura: {personaje.properties.height}</p>
        </div>
      )}
    </div>
  );
}