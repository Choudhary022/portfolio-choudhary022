import {
    Box,
    styled
} from "@mui/material"

export const BasicDetailContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    gap: 15,
    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        alignItems: "center",
        margin:"20px 5px 0px 5px"
    },
}));

export const Avatar = styled("img")(() => ({
    width: "200px",
    height: "200px",
    borderRadius: "25%"

}));











