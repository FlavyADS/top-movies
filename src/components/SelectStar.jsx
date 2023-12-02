import React from "react";

const SelectStar = ({ value, onChange }) => {
  return (
    <div
      className="flex items-center justify-center font-dm bg-neutral-100/20 w-full px-8
    rounded-2xl text-neutral-100 "
    >
      <select
        className="w-full py-6 text-xl bg-transparent after:text-neutral-100 "
        value={value}
        onChange={onChange}
      >
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
