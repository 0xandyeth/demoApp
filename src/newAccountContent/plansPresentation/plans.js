import Radium from "radium";
import React from "react";
import AccountPlanBox from "../../UI/accountPlanBox";
import { blueBtnStyle, COLORS } from "../../UI/constants";

const styles = {
	blueBtn: {
		margin: "1rem 20% 2rem 20%",
		width: "50%",
		height: "2.5rem",
		padding: "0.3rem 1rem",
	},
	wrapper: {
		width: "100%",
		margin: 0,
		background: COLORS.backgroundWhite,
	},
	bodyWrapper: {
		padding: "0 5% 0 5%",
		borderRight: "2px solid rgb(0,0,0,0.2)",
	},
	label: {
		color: "blue",
		background: "#DCDCDC",
		width: "100%",
		padding: "2rem auto",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "30px",
		fontWeight: "bold",
	},
};

const Plans = (props) => {
	const { title, bodyTitle, bodyText, bodyMinDeposit } = props;

	return (
		<div style={styles.wrapper}>
			<div style={styles.label}>
				<h1>{title}</h1>
			</div>
			<div style={styles.bodyWrapper}>
				<AccountPlanBox
					borderRight
					border
					title={bodyTitle}
					text={bodyText}
					minDeposit={bodyMinDeposit}
				/>
				<AccountPlanBox
					borderRight
					border
					title={bodyTitle}
					text={bodyText}
					minDeposit={bodyMinDeposit}
				/>
				<AccountPlanBox
					title={bodyTitle}
					text={bodyText}
					minDeposit={bodyMinDeposit}
				/>
				<button style={{ ...blueBtnStyle, ...styles.blueBtn }}>Select</button>
			</div>
		</div>
	);
};

export default Radium(Plans);
