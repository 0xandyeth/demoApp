import Radium from "radium";
import React from "react";
import { blueBtnStyle, COLORS, shadowedBox } from "../../UI/constants";
import AccountPlanBox from "../../UI/accountPlanBox";

const styles = {
	whiteBox: {
		...shadowedBox,
		background: COLORS.backgroundWhite,
		position: "relative",
	},
	title: {
		width: "100%",
		height: "60px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "1.3rem",
		background: COLORS.mainContentBackground,
		fontWeight: "bold",
	},
	blueBtn: {
		margin: "1rem 15% 0 15%",
		width: "70%",
		position: "absolute",
		bottom: "3rem",
	},
	boxesWrapper: {
		padding: "0.3rem 6% 1rem 6%",
	},
};

const data = {
	title: "Standard (MT5)",
	text: "Trade FX and CFDs with standard conditions and low floating spreads",
	minDeposit: [100, 40000],
};

const DemoTrading = (props) => {
	return (
		<div style={{ ...props.style, ...styles.whiteBox }}>
			<div style={styles.title}>
				<h1>Demo Trading</h1>
			</div>
			<div style={styles.boxesWrapper}>
				<AccountPlanBox
					border
					title={data.title}
					text={data.text}
					minDeposit={data.minDeposit}
				/>
				<AccountPlanBox
					border
					title={data.title}
					text={data.text}
					minDeposit={data.minDeposit}
				/>
				<AccountPlanBox
					border
					title={data.title}
					text={data.text}
					minDeposit={data.minDeposit}
				/>
				<AccountPlanBox
					title={data.title}
					text={data.text}
					minDeposit={data.minDeposit}
				/>
			</div>
			<button style={{ ...blueBtnStyle, ...styles.blueBtn }}>Select</button>
		</div>
	);
};

export default Radium(DemoTrading);
