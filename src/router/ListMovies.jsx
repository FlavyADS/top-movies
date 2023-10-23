
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((data) => data.json())
      .then((data) => {
        setMovies(data);
        console.log(data);
      });
  }, []);

  const deleteMovie = (id) => {
    fetch(`http://localhost:3000/movies/${id}`, { method: "DELETE" });
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  function getStar(numero) {
    switch (numero) {
      case "1": 
        return <>&#11088;</>
      case "2":
        return <>&#11088;&#11088;</>
    }
  }


  return (
    ///table - tr
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.title} --
          {getStar(movie.rate)}
            <button>
            <Link to={`/editarFilme/${movie.id}`}>Editar</Link>
            </button>
        <button onClick={() => deleteMovie(movie.id)}>deletar</button>
        </li>
      ))}
    </div> 
  );
};

export default ListMovies;
