import React from "react";

const InputTitle = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-center text-neutral-100 font-dm w-full">
      <input
        className="w-full px-8 py-6 text-neutral-100 text-xl bg-neutral-100/20 
      font-normal rounded-2xl"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputTitle;
