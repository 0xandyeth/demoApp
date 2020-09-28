import React from "react";
import { COLORS } from "../../UI/constants";
import Plans from "./plans";

const styles = {
	wrapper: {
		width: "100%",
		boxShadow: "0 0 3px 1px black",
		borderRadius: "10px",
		overflow: "hidden",
	},
	plansGrid: {
		display: "grid",
		gridTemplateColumns: `${100 / 3}% ${100 / 3}% ${100 / 3}% `,
		gridTemplateRow: "auto",
		gridTemplateAreas: "col1 col2 col3",
	},
	blueLabel: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: COLORS.labelBlue,
		width: "100%",
		fontSize: "1rem",
		height: "43px",
		color: "#F9F9F9",
		fontWeight: "bold",
	},
};

const data = {
	title: "Standard Accounts",
	body: {
		title: "Standard (MT5)",
		text: "Trade FX and CFDs with standard conditions and low floating spreads",
		minDeposit: [100, 40000],
	},
};

const PlansPresentation = (props) => {
	return (
		<div style={styles.wrapper}>
			<div style={styles.blueLabel}>
				<h1>Live Account</h1>
			</div>
			<div style={styles.plansGrid}>
				<Plans
					title={data.title}
					bodyTitle={data.body.title}
					bodyText={data.body.text}
					bodyMinDeposit={data.body.minDeposit}
				/>
				<Plans
					title={data.title}
					bodyTitle={data.body.title}
					bodyText={data.body.text}
					bodyMinDeposit={data.body.minDeposit}
				/>
				<Plans
					title={data.title}
					bodyTitle={data.body.title}
					bodyText={data.body.text}
					bodyMinDeposit={data.body.minDeposit}
				/>
			</div>
		</div>
	);
};

export default PlansPresentation;
