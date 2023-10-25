import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputTitle from "../components/InputTitle";
import SelectStar from "../components/SelectStar";

const EditMovies = () => {
  const { id } = useParams();
  const navigate = useNavigate()
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
      // se gravou redirecionar para home com a lista
    }
    return navigate("/")
  };

  return (
    <div>
      <InputTitle
        type="text"
        value={movies.title}
        onChange={(e) => setMovies({ ...movies, title: e.target.value })}
      />
      <SelectStar
        value={movies.rate}
        onChange={(e) => setMovies({ ...movies, rate: e.target.value })}
      />
      <button onClick={handleChange}>Adicionar</button>
    </div>
  );
};

export default EditMovies;
