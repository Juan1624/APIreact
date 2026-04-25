import { useState, useEffect } from "react";
import "./Favorito.css";

export default function Favorito() {
  const [favs, setFavs] = useState<any[]>([]);


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favs") || "[]");
    setFavs(data);
  }, []);


  const eliminarFavorito = (uid: string) => {
    const nuevos = favs.filter(f => f.uid !== uid);

    setFavs(nuevos);
    localStorage.setItem("favs", JSON.stringify(nuevos));
  };

  return (
    <div>
      <h1>Favoritos</h1>

      {favs.length === 0 && <p>No hay favoritos</p>}

      {favs.map(f => (
        <div key={f.uid} className="card">
          <p>{f.name}</p>

          <button onClick={() => eliminarFavorito(f.uid)}>
            ❌ Quitar
          </button>
        </div>
      ))}
    </div>
  );
}