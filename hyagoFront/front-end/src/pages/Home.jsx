import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1> Bem-vindo ao sistema de eventos </h1>
      <h3 />
      <Link to="/eventos">Lista de Eventos</Link>
      <h3 />
      <Link to="/organizadores">Lista de Organizadores</Link>
      <h3 />
      <Link to="/ingressos">Lista de Ingressos</Link>
      <h3 />
      <Link to="/evento/novo/">Criar Evento</Link>
    </div>
  );
}

export default Home;
