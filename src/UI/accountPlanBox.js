import React from "react";

const styles = {
	box: {
		width: "100%",
		padding: "1.5rem 0.3rem 1.5rem 0.3rem",
	},
	title: {
		fontWeight: "bold",
		marginBottom: "0.6rem",
		fontSize: "0.9rem",
	},
	text: {
		marginBottom: "0.8rem",
		fontSize: "0.8rem",
		lineHeight: 1.5,
	},
	minDeposit: {
		fontWeight: "bold",
		fontSize: "0.9rem",
	},
	border: {
		borderBottom: "2px solid rgb(0,0,0,0.2)",
	},
};

const AccountPlanBox = (props) => {
	const { title, text, minDeposit } = props;

	let border = {};
	if (props.border) border = styles.border;

	return (
		<div style={{ ...styles.box, ...border }}>
			<h2 style={styles.title}>{title}</h2>
			<p style={styles.text}>{text}</p>
			<h3
				style={styles.minDeposit}
			>{`Min deposit: $/\u20AC:${minDeposit[0]}, ${minDeposit[1]}`}</h3>
		</div>
	);
};

export default AccountPlanBox;
