import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {ReactComponent as AppLogo} from "../../assets/logo.svg"
import React from "react";

const Navbar = () => {
	return (
		<Fragment>
			<div>
				<AppLogo />
				<h1>Navbar</h1>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navbar;
