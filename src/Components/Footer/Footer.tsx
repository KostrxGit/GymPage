import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="description">
                <h2>What is this?</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
                    voluptatum quos quas quidem nemo. Quisquam, quae. Quisquam, quae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
                    voluptatum quos quas quidem nemo. Quisquam, quae. Quisquam, quae.
                </p>
            </div>
            <div className="socials">
                <h2>Let's check my socials:</h2>
                <div className="socials-icons">
                    <a href="https://github.com/KostrxGit">
                        <FaGithub className="github" fill="rgb(170, 170, 170)" />
                        <p>Github: KostrxGit</p>
                    </a>
                    <a href="https://discord.gg/2BvsyFdw">
                        <FaDiscord className="discord" fill="rgb(170, 170, 170)" />
                        <p>Discord: Kostrx#5556</p>
                    </a>
                    <a href="#">
                        <MdOutlineEmail className="mail" fill="rgb(170, 170, 170)" />
                        <p>kostrx.gitcontact@gmail.com</p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;