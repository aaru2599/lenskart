import React from "react";

const Button = ({ data }) => {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-[5px] text-sm px-3 py-1.5 text-center"
    >
      {data}
    </button>
  );
};

export default Button;
