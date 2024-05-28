import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const { user, login } = useContext(AuthContext);

	const handleSubmit = (e) => {
		// do something
		login({ name: name, email: email });
	};

	return (
		<div>
			{user === null ? (
				<>
					<div>
						<h2>Login</h2>
						<form onSubmit={handleSubmit}>
							<div>
								<label htmlFor="name-input">Name:</label>
								<input
									id="name-input"
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							<div>
								<label htmlFor="email-input">Email:</label>
								<input
									id="email-input"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div>
								<label htmlFor="password-input">Password:</label>
								<input
									id="password-input"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<button type="submit">Login</button>
						</form>
					</div>
				</>
			) : (
				<p>logged in</p>
			)}
		</div>
	);
};
