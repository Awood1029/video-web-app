import { createContext, useState, useEffect } from "react";
import VIDEOS from "../video-data.json";
import { addCollectionAndDocuments } from "../utils/firebase.utils";

export const VideosContext = createContext({
	videos: [],
});

export const VideosProvider = ({ children }) => {
	const [videos, setVideos] = useState(VIDEOS);
	const value = { videos };
	const movies = videos.filter((video) => video.category === "Movie");
	useEffect(() => {
		addCollectionAndDocuments("categories", movies);
	}, []);
	return (
		<VideosContext.Provider value={value}>{children}</VideosContext.Provider>
	);
};
