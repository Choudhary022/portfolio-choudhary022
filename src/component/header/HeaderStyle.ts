import {
    List,
    styled
} from "@mui/material"

export const ListContainer = styled(List)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down('sm')]: {
        justifyContent: "center",
    },

}));