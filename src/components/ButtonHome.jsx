import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const ButtonHome = () => {
  return (
    <div className="flex flex-col px-1 py-1">
      <Link to={"/"}>
        <button className="flex flex-row p-1 text-2xl font-medium text-neutral-100 rounded-3xl px-4 py-2">
          <FontAwesomeIcon icon={faHouse} />
        </button>
      </Link>
    </div>
  );
};

export default ButtonHome;
