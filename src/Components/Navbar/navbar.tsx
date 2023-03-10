import './navbar.css';
import MobileNav from './MobileNavi';
import Navigation from './Navigatin';


function NavBar() {
    return (
        <div className="nav">
            <Navigation />
            <MobileNav />
        </div>
    );

}

export default NavBar;