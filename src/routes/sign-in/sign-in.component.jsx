import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const SignIn = () => {
	return (
		<div className="page-container">
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
