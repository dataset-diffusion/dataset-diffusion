
import NavBar from "./components/NavBar";
import Abstract from "./components/Abstract";
import Motivation from "./components/Motivation";
import Content from "./components/Content";
import Bibtex from "./components/Bibtex";
import Results from "./components/Results";
import './App.css';

function App() {
  return (
    <div className="mainboard">
      <NavBar />
      <Abstract />
      <Motivation />
      <Content />
      <Results />
      <Bibtex />
    </div>

  );
}

export default App;
