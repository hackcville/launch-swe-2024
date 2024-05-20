import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./roots/Root.jsx";
import { Students } from "./roots/Students.jsx";
import { Teachers } from "./roots/Teachers.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
	{
		path: "/students",
		element: <Students />,
	},
	{
		path: "/teachers",
		element: <Teachers />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
