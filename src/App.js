import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

import Boxes from "./Boxes";
import Cursor from "./Cursor";

function App() {
  const [img, setImg] = useState();

  const updateCursor = () => {
    html2canvas(document.querySelector(".App")).then((canvas) => {
      const uri = canvas.toDataURL("image/png");
      setImg(uri);
    });
  };

  return (
    <>
      <div className="App" onClick={updateCursor}>
        <Boxes />
      </div>
      <Cursor img={img} />
    </>
  );
}

export default App;
