// import logo from './logo.svg';
import "./App.css";
import Blague from "./Blague";
import { Routes, Route, json } from "react-router-dom";
import ChoixBlag from "./ChoixBlab";
import NavigationBar from "./composants/NavigationBar";




function App() {
  return (
    <div className="App">
     
      <NavigationBar />
      <Routes>
        {/* <Route path="/" element={<Wellcomm />} /> */}
        <Route path="/choix" element={<ChoixBlag />} />
        <Route path="/blag/:id" element={<Blague />} />

      </Routes>
    </div>
  );
}

export default App;
