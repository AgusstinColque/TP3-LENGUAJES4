import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CargaImagen from "./componentes/CargaImagen";
import Contacto from "./componentes/Contacto";

export default function App() {
  return (
    <Router>
      <header style={{ background: "#eee", padding: "10px" }}>
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Inicio</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<CargaImagen />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </Router>
  );
}
