import React, { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button  style={{ margin: "10px" }} onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <h3>Welcome Gokul!</h3>}
    </div>
  );
}

export default ShowHide;
