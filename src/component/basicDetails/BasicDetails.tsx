import {
    Box,
    Button
} from "@mui/material";
import { FaLinkedin } from "react-icons/fa";
import {
    BasicDetailContainer,
    Avatar
} from "./basicDetailStyles";


const BasicDetails = () => {

    return (
        <BasicDetailContainer>
            <Avatar
                src="https://github.com/Choudhary022.png"
                alt="not found"
            />

            <Box>
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


                <Button
                    variant="outlined"
                    color="primary"
                    component="a"
                
                    href="public\Akash-Choudhary-resume.docx.pdf"
                    download
                    sx={{ padding: "2px", marginLeft: "10px" }}
                >
                    Download Resume
                </Button>
                <p>Full-Stack Java Developer &amp; React Enthusiast</p>

            </Box>
        </BasicDetailContainer>
    )
}

export default BasicDetails;