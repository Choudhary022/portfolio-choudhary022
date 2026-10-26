import { Box, Typography } from "@mui/material";
import { DetailContainer } from "./styles";
import { FaRegCalendarCheck } from "react-icons/fa";

const WorkExperience = () => {

    return (
        <Box
        sx={{ 
            display: "flex", 
            flexDirection: "column",   
            gap: 2
        
        }}
        
        >
            <DetailContainer>

                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Box>

                        <Typography variant="subtitle1">Associate Consultant</Typography>
                        <Typography variant="subtitle2">
                            Infosys Limited
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 0.5 }}>

                        <FaRegCalendarCheck />
                        <Typography variant="subtitle2">Nov-2025 - Present</Typography>
                    </Box>

                </Box>

                <Typography variant="body2" sx={{ marginTop: "10px" }}>
                    I am working as an Associate Consultant with Infosys's Client Insignia Financial Limited. I am working in Advice 
                    department, where I am integrating the Wealth Central and Expand applications to create and implement the advice for the customers.
                    We are working with Microservice architecture in agile methodology. I am working on the backend part of the application, where I am creating and implementing the APIs for the advice module.
                </Typography>

            </DetailContainer>
            <DetailContainer>

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
                        <Typography variant="subtitle2">Feb-2023 - Nov-2025</Typography>
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

        </Box>
    )
}
export default WorkExperience;