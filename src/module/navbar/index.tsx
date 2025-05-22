import { Button } from "antd";
import { Header } from "antd/es/layout/layout"

const NavigationBar = () => {



    return (
        <Header style={{
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"

        }}>

            <div>Akash Choudhary</div>

            <div style={{ display: "flex" }}>

                <Button type="link" >About</Button>

                <Button type="link" >Skills</Button>

                <Button type="link" >Contact Me</Button>

            </div>


        </Header>)

}

export default NavigationBar;