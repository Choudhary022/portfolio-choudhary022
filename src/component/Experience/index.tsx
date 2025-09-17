import {
    Box,
    Tab,
    Tabs
} from "@mui/material";
import { useState } from "react";
import WorkExperience from "./WorkExperience";
import EducationalBackground from "./EducationalBackground";
import { WorkExperienceContainer } from "./styles";
import { MdOutlineWorkOutline } from 'react-icons/md';
import { MdOutlineSchool } from 'react-icons/md';


const Experience = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <section id="experience" >

            <h2 style={{ marginBottom: "0px" }}>Experience</h2>

            <WorkExperienceContainer>
                <Tabs value={value} onChange={handleChange} >
                    <Tab iconPosition="start" icon={<MdOutlineWorkOutline />} label="Work" {...a11yProps(0)} />
                    <Tab iconPosition="start" icon={<MdOutlineSchool />} label="Education" {...a11yProps(1)} />

                </Tabs>

                <Box marginTop="20px">

                    {value === 0 && <WorkExperience />}
                    {value === 1 && <EducationalBackground />}
                </Box>
            </WorkExperienceContainer>
        </section>
    )
}

export default Experience;


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}