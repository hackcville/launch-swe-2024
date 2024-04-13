import "./App.css";
import { GenreSelection } from "./components/GenreSelection";

function App() {
	const bookData = {
		fiction: [
			{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.0 },
			{ title: "1984", author: "George Orwell", price: 8.5 },
			{ title: "The Catcher in the Rye", author: "J.D. Salinger", price: 9.8 },
		],
		"non-fiction": [
			{ title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", price: 15.0 },
			{ title: "In Cold Blood", author: "Truman Capote", price: 12.0 },
			{ title: "The Diary of a Young Girl", author: "Anne Frank", price: 7.0 },
		],
		children: [
			{ title: "Charlotte's Web", author: "E.B. White", price: 5.0 },
			{ title: "The Gruffalo", author: "Julia Donaldson", price: 6.0 },
			{ title: "Where the Wild Things Are", author: "Maurice Sendak", price: 8.0 },
		],
	};

	return (
		<>
			<GenreSelection data={bookData} />
		</>
	);
}

export default App;
