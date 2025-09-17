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
        alignItems: "center"
    },
}));

export const Avatar = styled("img")(() => ({
    width: "200px",
    height: "200px",
    borderRadius: "25%"

}));











