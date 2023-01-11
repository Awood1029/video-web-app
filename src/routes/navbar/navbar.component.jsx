import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import React from "react";

const Navbar = () => {
	return (
		<Fragment>
			<div>
				<h1>Navbar</h1>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navbar;
