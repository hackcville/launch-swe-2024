import { AriaNav } from "../components/AriaNav";
import "../styles/App.css";
import { Login } from "../components/Login";

export const Home = () => {
	return (
		<div className="space">
			<AriaNav />
			<h1>Home</h1>
			<Login />
		</div>
	);
};
