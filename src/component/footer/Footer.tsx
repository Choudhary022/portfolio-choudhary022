import { Box } from '@mui/material';
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope
} from 'react-icons/fa';
import { FooterContainer } from './styles';

const Footer = () => {

    return (
        <section id="contact" style={{ paddingBottom: "0px" }}>

            <FooterContainer>
                <h2>Contact Me</h2>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                    <p>
                        <span className="icon-inline">
                            <a href="mailto:chakashk@gmail.com">  <FaEnvelope /></a>
                        </span>
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
                </Box>
            </FooterContainer>
        </section>
    );
}

export default Footer;
