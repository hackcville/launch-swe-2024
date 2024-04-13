import "../styles/About.css";

const About = () => {
    return (
        <>
            <h1>My First HTML Page</h1>
            <h3 style={{ color: "purple" }}>Hello, my name is Simon!</h3>
            <a href="https://joinforge.co/" target="_blank">
                Check out Forge's Website
            </a>
            <img src="https://static.tildacdn.com/tild6132-6463-4939-b030-653737613830/-/resize/504x/Launch_Internship_Pr.png"></img>
            <p className="red-text">I am a third year at UVA.</p>
            <div className="fav-foods">
                <p>My favorite foods:</p>
                <ul>
                    <li>Pizza</li>
                    <li>Tacos</li>
                    <li>Chicken Sandwich</li>
                </ul>
            </div>
        </>
    );
};

export default About;
