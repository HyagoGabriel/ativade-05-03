import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostEvento from "./pages/postEventos";
import Eventos from "./pages/Eventos";
import Ingressos from "./pages/Ingressos";
import Organizadores from "./pages/Organizadores";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/evento/novo" element={<PostEvento />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/ingressos" element={<Ingressos />} />
          <Route path="/organizadores" element={<Organizadores />} />
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
