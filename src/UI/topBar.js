import React from "react";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { COLORS } from "./constants";

const styles = {
	topBar: {
		margin: "0 2% 0 2%",
		height: "40px",
		width: "96%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		background: "#E7E2E2",
	},
	h2: {
		fontSize: "100%",
	},
	h1: {
		fontSize: "110%",
		width: "150px",
		marginLeft: "0.4rem",
	},
	rightItems: {
		display: "flex",
		alignItems: "center",
	},
	leftItems: {
		display: "flex",
		alignItems: "center",
		marginLeft: "2rem",
	},
};

const TopBar = (props) => {
	const profileIcon = (
		<IconContext.Provider
			value={{
				color: COLORS.grayArrowColor,
				size: "2rem",
			}}
		>
			<div>
				<CgProfile />
			</div>
		</IconContext.Provider>
	);

	const arrowIcon = (
		<IconContext.Provider
			value={{
				color: COLORS.grayArrowColor,
				size: "1.4rem",
			}}
		>
			<div>
				{" "}
				<MdKeyboardArrowDown />{" "}
			</div>
		</IconContext.Provider>
	);

	return (
		<div style={styles.topBar}>
			<div style={styles.leftItems}>
				<h2 style={styles.h2}>ENG</h2>
				{arrowIcon}
			</div>
			<div style={styles.rightItems}>
				{profileIcon}
				<h1 style={styles.h1}>User</h1>
				{arrowIcon}
			</div>
		</div>
	);
};

export default TopBar;
