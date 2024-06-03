import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Chatbot } from "./components/Chatbot";

function App() {
	// const getHelloWorldMessage = async () => {
	// 	try {
	// 		const response = await axios.get("http://localhost:5001/hello-world");
	// 		console.log("Message from server: ", response.data.message);
	// 	} catch (error) {
	// 		console.error("Error fetching message: ", error);
	// 	}
	// };

	return (
		<>
			<Chatbot />
		</>
	);
}

export default App;
