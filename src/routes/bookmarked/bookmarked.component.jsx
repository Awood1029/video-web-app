import React from "react";
import { useContext } from "react";
import { VideosContext } from "../../contexts/videos.context";
import VideoCard from "../../components/video-card/video-card.component";

const Bookmarked = () => {
	const { videos } = useContext(VideosContext);

	return (
		<div>
			<div className="bookmarked-movies-section">
				<h2>Bookmarked Movies</h2>
				<div className="video-container">
					{videos
						.filter((video) => video.category === "Movie" && video.isBookmarked)
						.map((movie) => (
							<VideoCard video={movie} />
						))}
				</div>
			</div>
			<div className="bookmarked-tv-series-section">
				<h2>Bookmarked TV Series</h2>
				<div className="video-container">
					{videos
						.filter(
							(video) => video.category === "TV Series" && video.isBookmarked
						)
						.map((show) => (
							<VideoCard video={show} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Bookmarked;
