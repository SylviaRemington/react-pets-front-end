// src/App.jsx
import { useEffect, useState } from "react";
import { index} from "./services/petService";
import "./App.css";

// ! Stopped at 29:05 of lecture & now am watching instead of coding along (so I can understand the concepts)
function App () {

  useEffect(() => {
    index();
  }, []);



  return <h1>Hello world!</h1>;
};

export default App;






