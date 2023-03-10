import { Link } from "react-router-dom";
import LoginBtn from "./loginBtn";
import logo from './logo.svg'


const NavLinks = () => {
    return (

        <ul className="nav-links">
            <li><img src={logo} alt="Logo" /></li>
            <li className='tekst'><Link to="/">Home</Link></li>
            <li><div className="line"></div></li>
            <li className='tekst'><Link to="/about" >About</Link></li>
            <li><div className="line"></div></li>
            <li className='tekst'><Link to="/contact">Contact</Link></li>
            <li><div className="line"></div></li>
            <li className='tekst'><Link to="/plans">Plans</Link></li>
            <li><LoginBtn /></li>
        </ul>
    );
}

export default NavLinks;