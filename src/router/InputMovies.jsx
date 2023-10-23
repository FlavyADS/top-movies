import  { useState } from 'react'

const InputMovies = () => {
    const [formData, setFormData] = useState({title: '', rate: ''})

    const handleAdd = () => {
      if (formData.title && formData.rate) {
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData)
        }
        fetch('http://localhost:3000/movies', requestOptions)
      }
    }
   

    
  return (
    <div>
      <input 
      type="text"
      value={formData.title}
      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      
      <select
        value={formData.rate}
        onChange={(e) => setFormData({ ...formData, rate: e.target.value})}
      >
        <option value="">Avalie com até 5 estrelas..</option>
        <option value="1">&#11088;</option>
        <option value="2">&#11088;&#11088;</option>
        <option value="3">&#11088;&#11088;&#11088;</option>
        <option value="4">&#11088;&#11088;&#11088;&#11088;</option>
        <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088;</option>
      </select>
       <button onClick={handleAdd}>Adicionar</button> 
    </div>
  )
}

export default InputMovies
