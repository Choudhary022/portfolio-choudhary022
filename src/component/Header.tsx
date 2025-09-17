
import {
    FaLinkedin
} from 'react-icons/fa';

const Header = () => {

    // const tags: string[] = [
    //     "I am a Full Stack Developer.",
    //     "I love to make robust, scalable web Application"

    // ];


    return (
        <header className="hero">
            <nav className="nav" id="top">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="intro">
                <div className="avatar">
                    <img src="https://github.com/Choudhary022.png" alt="not found" />
                </div>
                <div className="hero-content">
                    <h1>Akash Choudhary</h1>
                    <span>
                        <a
                            href="https://www.linkedin.com/in/akash-choudhary-76a0b9128/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </span>
                    <p>Full-Stack Java Developer &amp; React Enthusiast</p>
                    <a className="btn" href="#contact" aria-disabled>Contact Me</a>
                </div>
            </div>
        </header>
    )
}

export default Header;