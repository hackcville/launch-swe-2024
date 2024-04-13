import { useState } from "react";
//arrOfFavoriteFoods = ['jklfdj', 'kldjfdkl', 'ljkdfljdk']

export const FavoriteFoods = ({ arrOfFavoriteFoods }) => {
	const [count, setCount] = useState(0);

	console.log(arrOfFavoriteFoods);
	return (
		<>
			{arrOfFavoriteFoods.map((item) => (
				<ul>
					<li>{item}</li>
				</ul>
			))}
			<h1>Count: {count}</h1>
			<button onClick={() => setCount(count + 1)}>Increase count</button>
		</>
	);
};
