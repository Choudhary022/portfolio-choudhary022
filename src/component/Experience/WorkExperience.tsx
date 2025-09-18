import { Box, Typography } from "@mui/material";
import { DetailContainer } from "./styles";
import { FaRegCalendarCheck } from "react-icons/fa";

const WorkExperience = () => {

    return (<DetailContainer>

        <Box sx={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <Box>

                <Typography variant="subtitle1">Software Engineer</Typography>
                <Typography variant="subtitle2">
                    Plevenn Technologies Pvt. Ltd
                </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 0.5 }}>

                <FaRegCalendarCheck />
                <Typography variant="subtitle2">02/2023 - Present</Typography>
            </Box>

        </Box>

        <Typography variant="body2" sx={{ marginTop: "10px" }}>
            I am a Software Engineer with a strong focus on building scalable,
            high-performance applications. My expertise includes designing robust APIs,
            optimizing database performance, and developing intuitive, user-friendly interfaces that
            enhance the overall user experience. I thrive in collaborative environments and enjoy
            turning complex requirements into elegant, maintainable solutions.
        </Typography>

    </DetailContainer>
    )
}
export default WorkExperience;