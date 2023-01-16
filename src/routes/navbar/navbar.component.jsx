import { Link, Outlet } from "react-router-dom";
import { ReactComponent as AppLogo } from "../../assets/logo.svg";
import { ReactComponent as NavHome } from "../../assets/icon-nav-home.svg";
import { ReactComponent as NavMovies } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as NavTv } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as NavBookmark } from "../../assets/icon-nav-bookmark.svg";
import NavUserIcon from "../../assets/image-avatar.png";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import React from "react";

const Navbar = () => {
	const { currentUser } = useContext(UserContext);
	console.log(currentUser);

	return (
		<div className="page-container">
			<div className="navbar">
				<div>
					<AppLogo className="navbar__logo" />
					<div className="navbar__links">
						<Link to="/">
							<NavHome height="20px" width="20px" />
						</Link>
						<Link to="/movies">
							<NavMovies height="20px" width="20px" />
						</Link>
						<Link to="tv-series">
							<NavTv height="20px" width="20px" />
						</Link>
						<Link to="/bookmarked">
							<NavBookmark height="20px" width="20px" />
						</Link>
					</div>
				</div>
				<div className="navbar__user-icon">
					<img
						src={
							currentUser?.photoURL ? `${currentUser?.photoURL}` : NavUserIcon
						}
						alt="User Icon"
						className="navbar__user-image"
					/>
				</div>
			</div>
			<div className="main-container">
				<div className="search-bar">
					<SearchIcon width="32px" height="32px" />
					<p className="search-bar__text">Search for movies or TV series</p>
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default Navbar;
