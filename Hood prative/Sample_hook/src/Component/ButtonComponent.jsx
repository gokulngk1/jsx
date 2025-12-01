import React from "react";

function ButtonComponent({ increase }) {
  return (
    <button onClick={increase}>
      Increase
    </button>
  );
}

export default ButtonComponent;
