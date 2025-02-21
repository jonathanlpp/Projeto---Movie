import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Para navegação
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"; // Ícones da barra de navegação

import "./Navbar.css"; // Estilos da barra de navegação

const Navbar = () => {
  const [search, setSearch] = useState(""); // Estado para armazenar a pesquisa
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    if (!search) return; // Se não houver pesquisa, não faz nada

    navigate(`/search?q=${search}`, { replace: true }); // Navega para a página de pesquisa
    setSearch(""); // Limpa o campo de pesquisa
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)} // Atualiza o estado com o valor da pesquisa
          value={search} // Valor do campo de pesquisa
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;