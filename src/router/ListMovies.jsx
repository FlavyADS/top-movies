import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        return <>&#11088;</>;
      case "2":
        return <>&#11088;&#11088;</>;
      case "3":
        return <>&#11088;&#11088;&#11088;</>;
      case "4":
        return <>&#11088;&#11088;&#11088;&#11088;</>;
      case "5":
        return <>&#11088;&#11088;&#11088;&#11088;&#11088;</>;
    }
  }

  return (
    <div className="flex xl:w-full py-2 px-2 justify-center">
      <ul className="flex flex-col gap-5 py-2">
        {movies.map((movie) => (
          <li
            className=" text-neutral-100 list-none flex bg-neutral-100/10 
            rounded-2xl px-8 py-2 items-center gap-8"
            key={movie.id}
          >
            <div
              className="p-2 font-dm tracking-widest md:text-lg lg:text-2xl 
          font-normal whitespace-nowrap flex-grow"
            >
              {movie.title}
            </div>
            <div className="w-28 text-right">{getStar(movie.rate)}</div>
            <div className="flex flex-nowrap ">
              <div className="flex gap-4">
                <button className=" ">
                  <Link to={`/editarFilme/${movie.id}`}>
                    <FontAwesomeIcon icon={faPen} />
                  </Link>
                </button>
                <button
                  className="m-1 py-2 "
                  onClick={() => deleteMovie(movie.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
