import React from "react";
import useMousePosition from "./useMousePosition";

const Cursor = ({ img }) => {
  const { x, y } = useMousePosition();
  return (
    <div className="customCursor" style={{ left: `${x}px`, top: `${y}px` }}>
      <img src={img} />
    </div>
  );
};

export default Cursor;
