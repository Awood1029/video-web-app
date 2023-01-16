import React from "react";

const FormInput = ({ ...otherProps }) => {
	return (
		<div>
			<input className="form-input" {...otherProps} />
		</div>
	);
};

export default FormInput;
