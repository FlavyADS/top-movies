import React from "react";

const SelectStar = ({ value, onChange }) => {
  return (
    <div>
      <select value={value} onChange={onChange}>
        <option value="">Avalie com até 5 estrelas..</option>
        <option value="1">&#11088;</option>
        <option value="2">&#11088;&#11088;</option>
        <option value="3">&#11088;&#11088;&#11088;</option>
        <option value="4">&#11088;&#11088;&#11088;&#11088;</option>
        <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088;</option>
      </select>
    </div>
  );
};

export default SelectStar;
