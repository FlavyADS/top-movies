import React from "react";
import ButtonHome from "./ButtonHome";
import ButtonCadastro from "./ButtonCadastro";

const Header = () => {
  return (
    <div>
      <ButtonHome />
      <h3>Top Filmes e Séries</h3>
      <ButtonCadastro />
    </div>
  );
};

export default Header;
