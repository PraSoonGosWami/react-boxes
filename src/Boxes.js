import { useState } from "react";

function Boxes() {
  const [drag, setDrag] = useState(false);

  const mup = (e) => {
    setDrag(false);
    if (e.target.className === "box") e.target.style.backgroundColor = "black";
  };

  const mdown = (e) => {
    setDrag(true);
    if (e.target.className === "box") e.target.style.backgroundColor = "black";
  };
  const mover = (e) => {
    if (drag && e.target.className === "box")
      e.target.style.backgroundColor = "black";
  };

  return (
    <div
      className="boxes"
      onMouseUp={mup}
      onMouseDown={mdown}
      onMouseOver={mover}
    >
      {Array(324)
        .fill(1)
        .map((_, index) => {
          return (
            <div
              className="box"
              key={index}
              style={{
                width: 20,
                height: 20,
                margin: 2,
                backgroundColor: "#ddd",
              }}
            ></div>
          );
        })}
    </div>
  );
}

export default Boxes;
