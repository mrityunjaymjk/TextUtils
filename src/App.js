// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./Textforms";

function App() {
  return (
    <>
      <Navbar title="Text Utils"/>
      <div className="container">
        <TextForm heading="Chalo Analyse karte hn" />
      </div>
    </>
    
  );
}

export default App;
