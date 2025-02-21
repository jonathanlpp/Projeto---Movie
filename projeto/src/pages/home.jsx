import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"; // Componente para exibir os filmes

import "./MoviesGrid.css"; // Estilos específicos da grade de filmes

const moviesURL = import.meta.env.VITE_API; // URL da API
const apiKey = import.meta.env.VITE_API_KEY; // Chave da API

const Home = () => {
  const [topMovies, setTopMovies] = useState([]); // Estado para armazenar filmes

  // Função para buscar os filmes mais bem avaliados
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results); // Atualiza o estado com os resultados
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`; // Monta a URL
    console.log(topRatedUrl); // Log da URL
    getTopRatedMovies(topRatedUrl); // Chama a função para buscar os filmes
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)} {/* Renderiza os cartões de filmes */}
      </div>
    </div>
  );
};

export default Home;