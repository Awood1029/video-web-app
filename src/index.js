import React from "react";
import ReactDOM from "react-dom/client";
import "./routes/navbar/navbar.styles.scss";
import "./routes/home/home.styles.scss";
import "./routes/sign-in/sign-in.styles.scss";
import "./routes/sign-up/sign-up.styles.scss";
import "./components/form-input/form-input.styles.scss";
import "./components/video-card/video-card.styles.scss";
import "./components/button/button.styles.scss";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { VideosProvider } from "./contexts/videos.context";
import { UserContext, UserProvider } from "./contexts/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<VideosProvider>
					<App />
				</VideosProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
