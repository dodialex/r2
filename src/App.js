import React from "react";
import { Gambar, GambarGambar } from "./components";

function App() {
  return (
    <div style={bg}>
      {/* <Lambok /> */}
      <Gambar />
      <br /> <br />
      {/* <GambarGambarAyam /> */}
      <GambarGambar />
    </div>
  );
}

export default App;

const bg = {
  backgroundColor: "#fedf87",
};
