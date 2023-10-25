import React from "react";
import { Link } from "react-router-dom";

const ButtonCadastro = () => {
  return (
    <div>
      <Link to={"/cadastrarFilme"}>
        <button>Cadastre Filmes e séries!!</button>
      </Link>
    </div>
  );
};

export default ButtonCadastro;
