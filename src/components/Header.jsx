import React from "react";
import ButtonHome from "./ButtonHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex px-4 py-2 items-center">
      <div className=" flex justify-center items-center text-neutral-100 px-1  text-4xl">
        <FontAwesomeIcon icon={faVideo} />
      </div>
      <h1
        className="flex justify-center text-5xl font-oswald font-bold
      tracking-widest italic text-neutral-100 px-5 py-5 "
      >
        Top Movies
      </h1>
      <div className="flex flex-grow justify-end">
        <ButtonHome />
      </div>
    </div>
  );
};

export default Header;
