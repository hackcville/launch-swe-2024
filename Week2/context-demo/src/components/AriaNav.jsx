import React from "react";
import { TabNav, Flex } from "@radix-ui/themes";
import { useLocation, Link } from "react-router-dom";

export const AriaNav = () => {
	const location = useLocation();
	const { pathname } = location;
	return (
		<div>
			<Flex direction="column" gap="4" pb="2">
				<TabNav.Root color="gray">
					<TabNav.Link asChild active={pathname === "/"}>
						<Link to="/">Home</Link>
					</TabNav.Link>
					<TabNav.Link asChild active={pathname === "/explore"}>
						<Link to="/explore">Explore</Link>
					</TabNav.Link>
					<TabNav.Link asChild active={pathname === "/messages"}>
						<Link to="/messages">Messages </Link>
					</TabNav.Link>
					<TabNav.Link asChild active={pathname === "/profile"}>
						<Link to="/profile">Profile</Link>
					</TabNav.Link>
				</TabNav.Root>
			</Flex>
		</div>
	);
};
