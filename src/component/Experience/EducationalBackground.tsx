import {
    Box,
    Stack,
    Typography
} from "@mui/material";
import { DetailContainer } from "./styles";
import { FaRegCalendarCheck } from 'react-icons/fa6';

const EducationalBackground = () => {

    return (<Stack
        spacing={2}
    >
        <DetailContainer>

            <Box sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Box>

                    <Typography variant="subtitle1">Full Stack Software Engineering</Typography>
                    <Typography variant="subtitle2">
                        National Institute Of Information Technology
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 0.5 }}>

                    <FaRegCalendarCheck />

                    <Typography variant="subtitle2">03/2022 - 09/2022</Typography>
                </Box>

            </Box>

            <Typography variant="body2" sx={{ marginTop: "10px" }}>
                Post Graduate Program in Full Stack Engineering
            </Typography>

        </DetailContainer>
        <DetailContainer>

            <Box sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Box>

                    <Typography variant="subtitle1">B.Tech Mechanical Engineering</Typography>
                    <Typography variant="subtitle2">
                        Dr. A.P.J. Abdul Kalam Technical University, UP
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 0.5 }}>

                    <FaRegCalendarCheck />
                    <Typography variant="subtitle2">08/2016 - 09/2020</Typography>
                </Box>

            </Box>

            <Typography variant="body2" sx={{ marginTop: "10px" }}>
                Graduated with a percentile of 75.1%
            </Typography>

        </DetailContainer>


        <DetailContainer>

            <Box sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Box>

                    <Typography variant="subtitle1">Intermediate</Typography>
                    <Typography variant="subtitle2">
                        Lala Jagdish prasad Saraswati Vidya Mandir, Muzaffarnagar
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 0.5 }}>

                    <FaRegCalendarCheck />

                    <Typography variant="subtitle2">07/2015 - 03/2016</Typography>
                </Box>

            </Box>

            <Typography variant="body2" sx={{ marginTop: "10px" }}>
                Graduated with a percentile of 76%
            </Typography>

        </DetailContainer>


    </Stack>)
}

export default EducationalBackground;