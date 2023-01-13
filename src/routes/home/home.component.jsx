import React from "react";
import { useContext } from "react";
import { VideosContext } from "../../contexts/videos.context";
import VideoCard from "../../components/video-card/video-card.component";

const Home = () => {
	const { videos } = useContext(VideosContext);
	return (
		<div>
			<h2>Trending</h2>
			{/* <!-- Display trending shows --> */}
			<h2>Recommended for you</h2>
			{/* <!-- Display recommended shows --> */}
			<div className="video-container">
				{videos.map((video) => (
					<VideoCard video={video} />
				))}
			</div>
		</div>
	);
};

export default Home;
