import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/favorito">Favorito</Link>
      <Link to="/original">Original</Link>
      <Link to="/informativa">Informativa</Link>
      <Link to="/usuario">Usuario</Link>
    </nav>
  );
}