import { AriaNav } from "../components/AriaNav";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export const Profile = () => {
	const { user, logout } = useContext(AuthContext);

	return (
		<div className="space">
			<AriaNav />
			<h1>Profile</h1>
			{user === null ? null : (
				<>
					<p>Name: {user.name}</p>
					<p>Email: {user.email}</p>
					<button onClick={() => logout()}>logout</button>
				</>
			)}
		</div>
	);
};
