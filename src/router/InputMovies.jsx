import { useState } from "react";
import InputTitle from "../components/InputTitle";
import SelectStar from "../components/SelectStar";

const InputMovies = () => {
  const [formData, setFormData] = useState({ title: "", rate: "" });

  const handleAdd = () => {
    if (formData.title && formData.rate) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };
      fetch("http://localhost:3000/movies", requestOptions);
    }
  };

  return (
    <div>
      <InputTitle
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />

      <SelectStar
        value={formData.rate}
        onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
};

export default InputMovies;
