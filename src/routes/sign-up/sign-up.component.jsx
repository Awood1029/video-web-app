import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUp = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	console.log(formFields);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			} else {
				console.log("user creation encountered an error", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div className="sign-up-page-container">
			<div className="sign-up-container">
				<Logo className="sign-up-logo" />
				<h2 className="sign-up-container__header">Sign Up</h2>
				<form onSubmit={handleSubmit} className="sign-up-container__form">
					<FormInput
						type="text"
						placeholder="Display Name"
						required
						onChange={handleChange}
						name="displayName"
						value={displayName}
					/>
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
					<FormInput
						type="password"
						placeholder="Confirm Password"
						required
						onChange={handleChange}
						name="confirmPassword"
						value={confirmPassword}
					/>
					<button className="sign-up-container__button" type="submit">
						Create account
					</button>
				</form>
				<button
					className="sign-up-container__button"
					onClick={signInWithGoogle}
				>
					Sign up with Google
				</button>

				<p>
					Already have an account?{" "}
					<Link to="/sign-in" className="sign-up-container__sign-up">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
