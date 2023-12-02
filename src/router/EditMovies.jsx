import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputTitle from "../components/InputTitle";
import SelectStar from "../components/SelectStar";

const EditMovies = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((data) => data.json())
      .then((data) => {
        setMovies(data);
        console.log(data);
      });
  }, []);

  const handleChange = () => {
    if (movies.title && movies.rate) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movies),
      };

      fetch(`http://localhost:3000/movies/${id}`, requestOptions);
    }
    return navigate("/");
  };

  return (
    <div className="flex flex-col w-2/3 gap-4 justify-center items-center">
      <InputTitle
        type="text"
        value={movies.title}
        onChange={(e) => setMovies({ ...movies, title: e.target.value })}
      />
      <SelectStar
        value={movies.rate}
        onChange={(e) => setMovies({ ...movies, rate: e.target.value })}
      />

      <button
        className="w-2/3 text-zinc-300 bg-[#0B1C47]/90 m-8 py-4
       rounded-3xl font-dm font-semibold text-xl"
        onClick={handleChange}
      >
        Salvar edição
      </button>
    </div>
  );
};

export default EditMovies;
