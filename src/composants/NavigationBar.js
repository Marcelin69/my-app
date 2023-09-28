import "./nave.css";

import { Link} from "react-router-dom";

const NavigationBar =()=>{
  return(
     <nav className="navlik">
      <ul>
        {/* <li><Link to={"/blag"}>Blague</Link></li> */}
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/choix"}>Choix</Link></li>
      </ul>
     </nav>
  )
}

export default NavigationBar