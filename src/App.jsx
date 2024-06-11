import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <div className="logo">
          <img src="vite.svg" alt="logo" />
          <h2>Nolly-Flix</h2>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>
      <MovieList />
    </>
  );
}

export default App;
