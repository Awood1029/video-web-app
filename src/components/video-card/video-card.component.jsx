import React from "react";
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { ReactComponent as TvIcon } from "../../assets/icon-category-tv.svg";
import { ReactComponent as BookmarkEmpty } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkFull } from "../../assets/icon-bookmark-full.svg";

const VideoCard = ({ video }) => {
	const thumbnail = video.thumbnail.regular.small.replace("./assets/", "");
	return (
		<div className="video-card">
			<div className="video-card__thumbnail-container">
				<img
					src={thumbnail}
					alt="Video Thumbnail"
					className="video-card__thumbnail"
				/>
				<div className="video-card__bookmark-button">
					{video.isBookmarked ? (
						<BookmarkFull
							className="video-card__bookmark-icon"
							width="11.67px"
							height="14px"
						/>
					) : (
						<BookmarkEmpty
							className="video-card__bookmark-icon"
							width="11.67px"
							height="14px"
						/>
					)}
				</div>
			</div>
			<div className="video-card__details">
				<p className="video-card__details__text">{video.year}</p>
				<span className="video-card__dot" />
				<div className="video-card__video-type-box">
					{video.category === "Movie" && (
						<MovieIcon
							width="12px"
							height="12px"
							className="video-card__video-type-box__icon"
						/>
					)}
					{video.category === "TV Series" && (
						<TvIcon
							width="12px"
							height="12px"
							className="video-card__video-type-box__icon"
						/>
					)}

					<p className="video-card__details__text">{video.category}</p>
				</div>
				<span className="video-card__dot" />
				<p className="video-card__details__text">{video.rating}</p>
			</div>
			<h3>{video.title}</h3>
		</div>
	);
};

export default VideoCard;
