import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Favorito from "./pages/Favorito/Favorito";
import Original from "./pages/Original/Original";
import Informativa from "./pages/Informativa/Informativa";
import Usuario from "./pages/Usuario/Usuario";
import Detalle from "./pages/Detalle/Detalle";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorito" element={<Favorito />} />
        <Route path="/original" element={<Original />} />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/detalle/:id" element={<Detalle />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;