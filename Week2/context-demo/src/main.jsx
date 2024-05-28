import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./roots/Home.jsx";
import { Explore } from "./roots/Explore.jsx";
import { Profile } from "./roots/Profile.jsx";
import { Messages } from "./roots/Messages.jsx";

import { AuthProvider } from "./components/AuthContext.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/explore",
		element: <Explore />,
	},
	{
		path: "/messages",
		element: <Messages />,
	},
	{
		path: "/profile",
		element: <Profile />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<Theme>
				<RouterProvider router={router} />
			</Theme>
		</AuthProvider>
	</React.StrictMode>
);
