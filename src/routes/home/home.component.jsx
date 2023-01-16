import React from "react";
import { useContext } from "react";
import { VideosContext } from "../../contexts/videos.context";
import VideoCard from "../../components/video-card/video-card.component";
import LargeVideoCard from "./../../components/large-video-card/large-video-card.component";
import TrendingVideos from "../../components/trending-videos/trending-videos.component";

const Home = () => {
	const { videos } = useContext(VideosContext);
	return (
		<div>
			<TrendingVideos />
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
