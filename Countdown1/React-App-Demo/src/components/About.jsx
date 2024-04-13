import "../styles/About.css";
import { FavoriteFoods } from "./FavoriteFoods";
import { useState } from "react";

const About = () => {
	const arrOfFavoriteFoods = ["Pizza", "tacos", "chicken sando", "banana"];

	// const [isOn, setIsOn] = useState(false);
	// console.log(isOn);

	// setTimeout(() => {
	// 	setIsOn(!isOn);
	// }, 3000);

	return (
		<>
			<h1>My First HTML Page</h1>
			<h3 style={{ color: "purple" }}>Hello, my name is Simon!</h3>
			<a href="https://joinforge.co/" target="_blank">
				Check out Forge's Website
			</a>
			<img src="https://static.tildacdn.com/tild6132-6463-4939-b030-653737613830/-/resize/504x/Launch_Internship_Pr.png"></img>
			<p className="red-text">I am a third year at UVA.</p>
			<FavoriteFoods arrOfFavoriteFoods={arrOfFavoriteFoods} />
		</>
	);
};

export default About;
