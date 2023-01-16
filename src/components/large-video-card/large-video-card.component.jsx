import React from "react";
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { ReactComponent as TvIcon } from "../../assets/icon-category-tv.svg";
import { ReactComponent as BookmarkEmpty } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkFull } from "../../assets/icon-bookmark-full.svg";

const LargeVideoCard = ({ video }) => {
	const thumbnail = video.thumbnail.regular.large.replace("./assets/", "");

	const sectionStyle = {
		backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${thumbnail})`,
	};

	return (
		<div className="large-video-card" style={sectionStyle}>
			<div className="large-video-card__bookmark-button">
				{video.isBookmarked ? (
					<BookmarkFull
						className="large-video-card__bookmark-icon"
						width="11.67px"
						height="14px"
					/>
				) : (
					<BookmarkEmpty
						className="large-video-card__bookmark-icon"
						width="11.67px"
						height="14px"
					/>
				)}
			</div>
			<div className="large-video-card__details">
				<div className="large-video-card__details--top-row">
					<p className="large-video-card__details__text">{video.year}</p>
					<span className="large-video-card__dot" />
					<div className="large-video-card__video-type-box">
						{video.category === "Movie" && (
							<MovieIcon
								width="12px"
								height="12px"
								className="large-video-card__video-type-box__icon"
							/>
						)}
						{video.category === "TV Series" && (
							<TvIcon
								width="12px"
								height="12px"
								className="large-video-card__video-type-box__icon"
							/>
						)}

						<p className="large-video-card__details__text">{video.category}</p>
					</div>
					<span className="large-video-card__dot" />
					<p className="large-video-card__details__text">{video.rating}</p>
				</div>
				<h3 className="large-video-title">{video.title}</h3>
			</div>
		</div>
	);
};

export default LargeVideoCard;
