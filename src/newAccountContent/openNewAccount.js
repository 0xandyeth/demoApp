import React from "react";
import { COLORS } from "../UI/constants";
import DemoTrading from "./demoTrading/demoTrading";
import FormNewAccount from "./formNewAccount";
import PlansPresentation from "./plansPresentation/plansPresentation";

const styles = {
	h1: {
		fontSize: "4rem",
		margin: "4.5rem 0 2rem 4%",
	},
	simpleGrid: {
		display: "grid",
		gridTemplateColumns: "65% 33%",
		columnGap: "2%",
		gridTemplateRows: "auto",
		gridTemplateAreas: "form demo",
		margin: "1rem 0 2rem 0",
	},
	h2: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "50%",
		fontWeight: "bolder",
		fontSize: "1.1rem",
	},
	grayBar: {
		borderRadius: "30px",
		height: "60px",
		margin: "1rem 0 2rem 0",
		display: "flex",
		alignItems: "center",
		background: `linear-gradient(to top, ${COLORS.grayBarGradientBottom}, ${COLORS.grayBarGradientTop} 35%)`,
		overflow: "hidden",
	},
	squareArrow: {
		height: "250px",
		width: "80px",
		transform: "  rotate(45deg) translate3D(-45px,135px,0)  ",
		background: "transparent",
		boxShadow: "4px -4px 5px  rgb(0,0,0,0.3)",
		// border: "1px thin rgb(0,0,0,0.2)",
		borderRadius: "0 5px 0  0 ",
	},
};

const OpenNewAccount = (props) => {
	return (
		<div>
			<h1 style={styles.h1}>Open New Account</h1>
			<div style={styles.grayBar}>
				<div style={styles.h2}>
					<h2>1.Choose your account type</h2>
				</div>
				<div style={styles.squareArrow}></div>
				<div style={styles.h2}>
					<h2>2.Customise your trading account </h2>
				</div>
			</div>
			<PlansPresentation />
			<div style={styles.simpleGrid}>
				<FormNewAccount style={{ gridArea: "'form'" }} />
				<DemoTrading style={{ gridArea: "'demo'" }} />
			</div>
		</div>
	);
};

export default OpenNewAccount;
