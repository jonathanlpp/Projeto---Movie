import { Outlet } from "react-router-dom"; 
import Navbar from "./components/Navbar"; 

import "./App.css"; 

function App() {
  return (
    <div className="app-container">
      <Navbar /> {/* Renderiza a barra de navegação */}
      <Outlet /> 
    </div>
  );
}

export default App;
