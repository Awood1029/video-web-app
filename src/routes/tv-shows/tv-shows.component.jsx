import React from "react";
import { useContext } from "react";
import { VideosContext } from "../../contexts/videos.context";
import VideoCard from "../../components/video-card/video-card.component";

const TvShows = () => {
	const { videos } = useContext(VideosContext);
	return (
		<div>
			<h2>TV Series</h2>
			<div className="video-container">
				{videos
					.filter((video) => video.category === "TV Series")
					.map((show) => (
						<VideoCard video={show} />
					))}
			</div>
		</div>
	);
};

export default TvShows;
