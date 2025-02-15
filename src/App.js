import logo from "./logo.svg";
import "./App.css";
import Header from "./Layouts/Header";
import Home from "./components/Home";
import Story from "./components/Story";
import Novelty from "./components/Novelty";
import About from "./components/About";
import Share from "./components/Share";
import Footer from "./Layouts/Footer";

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
        <div className="pd2 middlelabel">
        © Noritake
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
