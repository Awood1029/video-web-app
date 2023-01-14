import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div className="sign-in-page-container">
			<div className="sign-in-container">
				<Logo className="sign-in-logo" />
				<h2 className="sign-in-container__header">Login</h2>
				<form onSubmit="" className="sign-in-container__form">
					<input
						type="email"
						placeholder="Email Address"
						className="sign-in-container__input"
					/>
					<input
						type="password"
						placeholder="Password"
						className="sign-in-container__input"
					/>
					<button className="sign-in-container__button">
						Login to your account
					</button>
				</form>
				<button
					className="sign-in-container__button"
					onClick={signInWithGoogle}
				>
					Login with Google
				</button>

				<p>
					Dont have an account?{" "}
					<a href="#" className="sign-in-container__sign-up">
						Sign Up
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
