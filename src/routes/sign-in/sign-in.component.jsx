import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import { useState, useContext } from "react";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignIn = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			resetFormFields();
			setCurrentUser(user);
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("incorrect password for email");
					break;
				case "auth/user-not-found":
					alert("no user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		setCurrentUser(user);
	};

	return (
		<div className="sign-in-page-container">
			<div className="sign-in-container">
				<Link to="/">
					<Logo className="sign-in-logo" />
				</Link>
				<h2 className="sign-in-container__header">Login</h2>
				<form onSubmit={handleSubmit} className="sign-in-container__form">
					<FormInput
						type="email"
						placeholder="Email Address"
						required
						onChange={handleChange}
						name="email"
						value={email}
					/>
					<FormInput
						type="password"
						placeholder="Password"
						required
						onChange={handleChange}
						name="password"
						value={password}
					/>
					<Button className="authentication-button" type="submit">
						Login to your account
					</Button>
				</form>
				<Button className="authentication-button" onClick={signInWithGoogle}>
					Login with Google
				</Button>

				<p>
					Dont have an account?{" "}
					<Link to="/sign-up" required className="sign-in-container__sign-up">
						Sign Up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
