import LoginBtn from "./loginBtn";

const MobileNavLinks = () => {
    return (

        <ul id="menu">
            <a href="index.html"><li className='tekst'>Home</li></a>
            <a href="#"><li className='tekst'>About</li></a>
            <a href="#"><li className='tekst'>Contact</li></a>
            <a href="#"> <li className='tekst'>Plans</li></a>
            {/* <li><LoginBtn /></li> */}
        </ul>
    );
}

export default MobileNavLinks;