import React from "react";
import { Link } from "react-router-dom";

const ButtonHome = () => {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default ButtonHome;
