import { createContext, useState } from "react";
import VIDEOS from "../video-data.json";

export const VideosContext = createContext({
	videos: [],
});

export const VideosProvider = ({ children }) => {
	const [videos, setVideos] = useState(VIDEOS);
	const value = { videos };
	return (
		<VideosContext.Provider value={value}>{children}</VideosContext.Provider>
	);
};
