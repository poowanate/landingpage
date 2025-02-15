import logo from "./logo.svg";
import "./App.css";
import Header from "./Layouts/Header";
import Home from "./components/Home";
import Story from "./components/Story";
import Novelty from "./components/Novelty";
import About from "./components/About";
import Share from "./components/Share";

function App() {
  return (
    <>
      <Header />
      <div className="pd2">
        <Home />
        <Story />
        <Novelty />
        <About/>
        <Share/>
      </div>
    </>
  );
}

export default App;
