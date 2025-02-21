import { Outlet } from "react-router-dom"; // Para renderizar as rotas aninhadas
import Navbar from "./components/Navbar"; // Importa o componente de navegação

import "./App.css"; // Estilos específicos do App

function App() {
  return (
    <div className="app-container">
      <Navbar /> {/* Renderiza a barra de navegação */}
      <Outlet /> {/* Renderiza o componente correspondente à rota */}
    </div>
  );
}

export default App;