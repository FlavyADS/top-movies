import React from "react";
import ListMovies from "./ListMovies";
import ButtonCadastro from "../components/ButtonRotaCadastro";

const Home = () => {
  return (
    <div className="flex flex-col px-1 py-1">
      <div className="flex justify-end text-medium font-medium font-dm">
        <ButtonCadastro />
      </div>
      <div className="flex py-8">
        <ListMovies />
      </div>
    </div>
  );
};

export default Home;
