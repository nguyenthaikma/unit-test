import "./App.css";
import Comments from "./components/Comment";
import { Play } from "./components/Play";

import axios from "axios";

function App() {
  console.log({...axios});
  return (
    <body data-theme="light" className="App">
      <Play />
      <br />
      <br />
      <br />
      <br />
      <Comments />
    </body>
  );
}

export default App;
