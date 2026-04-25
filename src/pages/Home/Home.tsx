import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then(res => res.json())
      .then(data => setData(data.results));
  }, []);

  return (
    <div>
      <h1>Personajes</h1>

      {data.map(p => (
        <div key={p.uid} className="card">
          <p>{p.name}</p>

        
          <Link to={`/detalle/${p.uid}`}>
            Ver detalle
          </Link>
        </div>
      ))}
    </div>
  );
}