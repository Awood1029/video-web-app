import React from "react";
import { useContext } from "react";
import { VideosContext } from "../../contexts/videos.context";
import LargeVideoCard from "./../../components/large-video-card/large-video-card.component";

const TrendingVideos = () => {
	const { videos } = useContext(VideosContext);

	return (
		<div>
			<h2>Trending</h2>
			{/* <!-- Display trending shows --> */}
			<div className="trending-video-container">
				{videos
					.filter((video) => video.isTrending)
					.map((trendingVideo) => (
						<LargeVideoCard video={trendingVideo} />
					))}
			</div>
		</div>
	);
};

export default TrendingVideos;
