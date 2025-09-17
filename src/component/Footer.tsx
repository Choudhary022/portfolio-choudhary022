import {
    FaLinkedin,
    FaGithub,
    FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contact" className="contact">
            <h2>Contact Me</h2>
            <p>
                <span className="icon-inline">
                    <a href="mailto:chakashk@gmail.com">  <FaEnvelope /></a>
                </span>
                Email:{' '}
                <a href="mailto:chakashk@gmail.com">
                    chakashk@gmail.com
                </a>
            </p>
            <p>
                <span className="icon-inline">
                    <a
                        href="https://www.linkedin.com/in/akash-choudhary-76a0b9128/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </span>
            </p>

            <p>
                <span className="icon-inline">
                    <a
                        href="https://github.com/Choudhary022"
                        target="_blank"
                        rel="noopener noreferrer"
                    >  <FaGithub /> </a>
                </span>
            </p>
        </footer >
    );
}

export default Footer;
