import {
    Tabs,
    TabsProps
} from "antd";
import EducationDetails from "./education";
import WorkExperience from "./workExperience";

const About = () => {

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Work',
            children: <WorkExperience />,
        },
        {
            key: '2',
            label: 'Education',
            children: <EducationDetails />,
        }
    ];

    return (<div>
        <Tabs defaultActiveKey="1" items={items} />
    </div>)
}

export default About;