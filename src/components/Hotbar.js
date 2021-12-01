import { Link } from 'react-router-dom'

function Hotbar(){
  return(
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about" >About</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
    </ul>
  );
}

export default Hotbar;