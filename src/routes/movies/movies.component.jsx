import React from "react";
import { useContext } from "react";
import { VideosContext } from "../../contexts/videos.context";
import VideoCard from "../../components/video-card/video-card.component";

const Movies = () => {
	const { videos } = useContext(VideosContext);

	return (
		<div>
			<h2>Movies</h2>
			<div className="video-container">
				{videos
					.filter((video) => video.category === "Movie")
					.map((movie) => (
						<VideoCard video={movie} />
					))}
			</div>
		</div>
	);
};

export default Movies;
