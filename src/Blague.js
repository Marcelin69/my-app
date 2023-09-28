import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blague = () => {
  const param = useParams();
  const prodId = param.id;
  const [blag,setBlag]=useState();
  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${prodId}`)
      .then((response) => response.json())
      .then((json) => setBlag(json.value));
  }, []);

  return (
    <div>
      <h2>Bonjour </h2>
      {blag}
      {console.log(prodId)}
    </div>
    
  );
};

export default Blague;
