import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

const EditMovies = () => {

  const { id } = useParams()
  const [movies, setMovies] = useState([])

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
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(movies)
      }

      fetch(`http://localhost:3000/movies/${id}`,requestOptions)
      // se gravou redirecionar para home com a lista
    }
  }


  // buscar dados -> passar o id de alteração, salvar esses dados no estado e colocar nos inputs ok
  // quando alterar vai alterar o estado tb ok
  // salvar chamando o metodo PUT (passar o body) ok
  return (
    <div>
    <input 
    type="text"
    value={movies.title}
    onChange={(e) => setMovies({ ...movies, title: e.target.value })}
    />
    <select
      value={movies.rate}
      onChange={(e) => setMovies({ ...movies, rate: e.target.value})}
    >
      <option value="">Avalie com até 5 estrelas..</option>
      <option value="1">&#11088;</option>
      <option value="2">&#11088;&#11088;</option>
      <option value="3">&#11088;&#11088;&#11088;</option>
      <option value="4">&#11088;&#11088;&#11088;&#11088;</option>
      <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088;</option>
    </select>
     <button onClick={handleChange}>Adicionar</button> 
  </div>
  )
}

export default EditMovies
