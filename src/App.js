import { Routes, Route } from "react-router-dom";
import Bookmarked from "./routes/bookmarked/bookmarked.component";
import Home from "./routes/home/home.component";
import Movies from "./routes/movies/movies.component";
import Navbar from "./routes/navbar/navbar.component";
import SignIn from "./routes/sign-in/sign-in.component";
import TvShows from "./routes/tv-shows/tv-shows.component";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route index element={<Home />} />
				<Route path="movies" element={<Movies />} />
				<Route path="tv-shows" element={<TvShows />} />
				<Route path="bookmarked" element={<Bookmarked />} />
				<Route path="sign-in" element={<SignIn />} />
			</Route>
		</Routes>
	);
}

export default App;
