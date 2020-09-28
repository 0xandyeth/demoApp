import React, { useState } from "react";
import Radium from "radium";
import { IconContext } from "react-icons";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { COLORS } from "../../UI/constants";

//styling
const styles = {
	li: {
		display: "flex",
		alignItems: "center",
		padding: "0.5rem 0 0.5rem 12%",
		width: "100%",
		// justifyContent: "space-around",
		boxSizing: "border-box",

		":hover": {
			background: "#F2F1F1",
			cursor: "pointer",
		},
		position: "relative",
		marginBottom: "4%",
	},
	h2: {
		fontSize: "100%",
		margin: 0,
		marginLeft: "13%",
		padding: 0,
		boxSizing: "border-box",
	},
	arrowIcon: {
		position: "absolute",
		right: 0,
		top: "20%",
		width: "4rem",
		height: "1.5rem",
	},
};

//constants
const ICON_SIZE = "1.5rem";
const ICON_COLOR = "blue";

//component
const SidebarRow = (props) => {
	const { icon, text } = props;
	const [displayIcon, setDisplayIcon] = useState("none");
	const [arrowDown, setArrowDown] = useState(true);

	//li handlers
	const liLeaveHandler = () => {
		setDisplayIcon("none");
	};

	const liEnterHandler = () => {
		setDisplayIcon("block");
	};

	const liClickHandler = () => {
		if (arrowDown) {
			setArrowDown(false);
			return;
		}
		setArrowDown(true);
	};

	const arrowIcon = (
		<IconContext.Provider
			value={{
				color: COLORS.grayArrowColor,
				style: {
					display: displayIcon,
					...styles.arrowIcon,
				},
			}}
		>
			<div>{arrowDown ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</div>
		</IconContext.Provider>
	);

	return (
		<li
			style={styles.li}
			onMouseEnter={liEnterHandler}
			onMouseLeave={liLeaveHandler}
			onClick={liClickHandler}
		>
			{icon}
			<h2 style={styles.h2}>{text}</h2>
			{arrowIcon}
		</li>
	);
};

export default Radium(SidebarRow);
