import { useState } from 'react'
import { Outlet } from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)
  const [movie, setMovie] = useState()

  return (
    <>
      <h1>Top Movies & Tv Shows</h1>
      <button className="bg-neutral-700 border-2  text-red-600 p-1 m-1">Cadastre</button>
      <button className="bg-neutral-700 border-2  text-red-600 p-1 m-1">Veja os filmes disponíveis já cadastrados</button>
      <Outlet />
    </>
  )
}

export default App
