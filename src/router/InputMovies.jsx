import { useState } from "react";
import InputTitle from "../components/InputTitle";
import SelectStar from "../components/SelectStar";
import { useNavigate } from "react-router-dom";

const InputMovies = () => {
  const [formData, setFormData] = useState({ title: "", rate: "" });
  const navigate = useNavigate();

  const handleAdd = () => {
    if (formData.title && formData.rate) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };
      fetch("http://localhost:3000/movies", requestOptions);
    }
    return navigate("/");
  };

  return (
    <div className="flex flex-col gap-4 h-2/3 justify-center items-center">
      <h1 className="text-[#055CB4] lg:text-7xl md:text-6xl font-dm font-bold text-right">
        Cadastre novos Filmes
      </h1>
      <InputTitle
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />

      <SelectStar
        value={formData.rate}
        onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
      />
      <button
        className="w-2/3 text-zinc-300 bg-[#0B1C47]/90 m-8 py-4
       rounded-3xl font-dm font-semibold text-xl"
        onClick={handleAdd}
      >
        Cadastrar Filme
      </button>
    </div>
  );
};

export default InputMovies;
