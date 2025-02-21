import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importa as funcionalidades de roteamento

import App from "./App"; // Componente principal
import Home from "./pages/Home"; // Página inicial
import Movie from "./pages/Movie"; // Página de detalhes do filme
import Search from "./pages/Search"; // Página de pesquisa

import "./index.css"; // Estilos globais

// Renderiza a aplicação
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} /> 
          <Route path="movie/:id" element={<Movie />} /> 
          <Route path="search" element={<Search />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);