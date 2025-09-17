import {
    AppBar,
    Button
} from "@mui/material";
import { ListContainer } from "./HeaderStyle";

const Header = () => {
    return (
        <AppBar position="static" sx={{  left: 0, right: 0, margin: 0, padding: 0 }}>
            <ListContainer>
                <Button
                    component="a"
                    href="#about"
                    variant="text"
                    sx={{ color: "white" }}>
                    About
                </Button>

                <Button
                    component="a"
                    href="#experience"
                    variant="text"
                    sx={{ color: "white" }}>
                    Experience
                </Button>

                <Button
                    component="a"
                    href="#skills"
                    variant="text"
                    sx={{ color: "white" }}>
                    Skills
                </Button>

                <Button
                    component="a"
                    href="#contact"
                    variant="text"
                    sx={{ color: "white" }}>
                    Contact
                </Button>
            </ListContainer>
        </AppBar>
    );
};
export default Header;
