import { useState } from "react";
import { Link } from "react-router-dom";

const ChoixBlag = () => {
  const [choix, setChoix] = useState("");
  const [categorie, setCategorie] = useState("");
  const [catchos, setCatchos] = useState([
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
  ]);
  const [lete, setLete] = useState("");
  const Handlsubmit = (e) => {
    e.preventDefault();
    setChoix(categorie);
    catchos.map((x, i) => {
      if (x === categorie) {
        setLete(x);
      }
    });

    setCategorie("");
  };
  const ChangeIput = (e) => {
    e.preventDefault();
    setCategorie(e.target.value);
  };
  // const SwohBlag=(e)=>{
     
  // }
  return (
    <div>
      <form onSubmit={Handlsubmit}>
        <input type="text" onChange={ChangeIput} value={categorie} />
        <input type="submit" />
      </form>
      <h1>Choisissez votre blague </h1>
      <Link to={`/blag/${lete}`}>voir mon blague</Link>
    </div>
  );
};
export default ChoixBlag;
