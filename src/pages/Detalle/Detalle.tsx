import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detalle() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState<any>(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then(res => res.json())
      .then(data => setPersonaje(data.result.properties));
  }, [id]);

  const guardarFavorito = () => {
    const favs = JSON.parse(localStorage.getItem("favs") || "[]");

    const nuevo = {
      uid: id,
      name: personaje.name
    };

    const existe = favs.find((f: any) => f.uid === id);

    if (!existe) {
      localStorage.setItem("favs", JSON.stringify([...favs, nuevo]));
    }
  };

  if (!personaje) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{personaje.name}</h1>

      <p><strong>Género:</strong> {personaje.gender}</p>
      <p><strong>Altura:</strong> {personaje.height}</p>
      <p><strong>Peso:</strong> {personaje.mass}</p>
      <p><strong>Color de ojos:</strong> {personaje.eye_color}</p>
      <p><strong>Color de cabello:</strong> {personaje.hair_color}</p>
      <p><strong>Color de piel:</strong> {personaje.skin_color}</p>
      <p><strong>Año de nacimiento:</strong> {personaje.birth_year}</p>

      
      <p><strong>Películas:</strong> {personaje.films.length}</p>
      <p><strong>Naves:</strong> {personaje.starships.length}</p>
      <p><strong>Vehículos:</strong> {personaje.vehicles.length}</p>

      <button onClick={guardarFavorito}>
         Agregar a favoritos
      </button>
    </div>
  );
}