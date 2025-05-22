

const ProfileSummary = () => {

    return (<div
        style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 100px 0px 100px"
        }}>

        <div>
            <h1>Full Stack Developer</h1>

            <div
                style={{
                    display: "flex"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flex: "wrap",
                        gap: 5
                    }}
                >
                    <a href="https://www.linkedin.com/in/akash-choudhary-76a0b9128/" rel="noopener noreferrer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                            alt="LinkedIn"
                            style={{ width: "30px", height: "30px" }}
                        />
                    </a>

                    <a href="https://github.com/Choudhary022" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="GitHub"
                            style={{ width: "30px", height: "30px" }}
                        />
                    </a>
                </div>
                <p>Hi, I am Akash Choudhary.
                    Passionate Full stack Developer Crafting dynamic, responsive, Web apps with cutting-edge technologies
                </p>
            </div>
        </div>

        <div>
            <img
                width="300"
                height="200"
                alt="not found"
                style={{ borderRadius: "50%" }}
                src={"https://images.nightcafe.studio/jobs/K1eCGcNHH24f00khNzHC/K1eCGcNHH24f00khNzHC--1--cg8nh.jpg"}
            />
        </div>
    </div>)
}

export default ProfileSummary;