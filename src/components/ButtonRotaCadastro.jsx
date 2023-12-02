import React from "react";
import { Link } from "react-router-dom";

const ButtonCadastro = () => {
  return (
    <div className="flex">
      <Link to={"/cadastrarFilme"}>
        <button
          className="bg-[#0B1C47]/90 text-xl text-neutral-100 
        font-semibold font-sans p-1 tracking-wide rounded-3xl lg:px-10 sm:px-8 py-4"
        >
          Cadastre Filmes
        </button>
      </Link>
    </div>
  );
};

export default ButtonCadastro;
