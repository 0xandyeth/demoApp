import Radium from "radium";
import React from "react";
import { IconContext } from "react-icons";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";
import { SiVerizon } from "react-icons/si";
import { blueBtnStyle, COLORS, shadowedBox } from "../UI/constants";

const styles = {
	form: {
		width: "100%",
		boxShadow: "0 0 3px 1px black",
		borderRadius: "10px",
		padding: "1rem 2rem",
		background: COLORS.backgroundWhite,
	},
	label: {
		fontSize: "1.1rem",
		fontWeight: "bold",
	},
	textInput: {
		padding: "1rem 0.5rem",
		width: "100%",
		...shadowedBox,
		":hover": {
			cursor: "pointer",
		},
	},
	textInputDiv: {
		width: "100%",
		display: "flex",
		alignItems: "center",
	},
	input: {
		margin: "1rem 0 1.8rem 0",
		outline: "none",
	},
	arrowIcon: {
		transform: "translate3D(-3rem, -0.2rem,0)",
		":hover": {
			cursor: "pointer",
		},
	},
	radiosWrapper: {
		display: "flex",
		alignItems: "center",
	},
	radioDiv: {
		display: "flex",
		alignItems: "center",
		marginLeft: "3rem",
	},
	firstRadioDiv: {
		display: "flex",
		alignItems: "center",
		marginLeft: 0,
	},
	radioInput: {
		width: "2.7rem",
		height: "2.7rem",
	},
	color: { color: "rgb(0,0,0,0.5)" },
	h2: {
		fontSize: "1.1rem",
		margin: "0  0 0.8rem 1rem ",
	},
	checkboxDiv: {
		display: "flex",
		alignItems: "center",
	},
	checkbox: {
		width: "2.7rem",
		height: "2rem",
	},
	checkboxText: {
		margin: "0 0 1rem 0.4rem",
	},
	password: {
		width: "80%",
		padding: "0,5rem 1rem",
		borderRadius: "15px",
		boxShadow: "0 0 2px  black",
		border: "none",
		height: "40px",
		fontSize: "1.8rem",
		outline: "none",
		padding: "0 1rem",
	},
	passwordLowerDiv: {
		display: "flex",
		alignItems: "center",
		margin: "1rem 0 0 0",
	},
	bottomPasswordText: {
		margin: "0 0.5rem 0 0.3rem",
		fontSize: "0.8rem",
	},
	eyeIcon: {
		transform: "translateX(-3rem)",
	},
	btns: {
		margin: "1.2rem 0 0.6rem 1rem",
		outline: "none",
	},
	previousPage: {
		fontSize: "1.1rem",
		marginLeft: "1rem",
		fontWeight: "bold",
	},
};

const FormNewAccount = (props) => {
	const arrowIcon = (
		<IconContext.Provider
			value={{
				color: "#A9A9A9",
				size: "2rem",
				style: styles.arrowIcon,
			}}
		>
			<div>
				<MdKeyboardArrowDown />
			</div>
		</IconContext.Provider>
	);
	const eyeIcon = (
		<IconContext.Provider
			value={{
				color: "#A9A9A9",
				size: "2rem",
				style: styles.eyeIcon,
			}}
		>
			<div>
				<BsEyeFill />
			</div>
		</IconContext.Provider>
	);
	const V_ICON_SIZE = "0.8rem";

	return (
		<form style={{ ...props.style, ...styles.form }} action="#">
			{/* i don't know exactly what the user should 
      choose from here, so i will just leave place 
      holder and icon*/}
			<label for="accountType" style={styles.label}>
				Account Type
			</label>
			<div style={styles.textInputDiv}>
				<input
					key={1}
					type="text"
					name="accountType"
					placeholder="Standard MT5"
					style={{ ...styles.textInput, ...styles.input }}
				/>
				{arrowIcon}
			</div>

			<label for="accountCurrency" style={styles.label}>
				Account Currency
			</label>
			<div style={styles.radiosWrapper}>
				<div style={styles.firstRadioDiv}>
					<input
						type="radio"
						style={{ ...styles.input, ...styles.radioInput }}
						name="accountCurrency"
					/>
					<h2 style={{ ...styles.h2, ...styles.color }}>EUR</h2>
				</div>
				<div style={styles.radioDiv}>
					<input
						type="radio"
						style={{ ...styles.input, ...styles.radioInput }}
						name="accountCurrency"
					/>
					<h2 style={{ ...styles.h2, ...styles.color }}>USD</h2>
				</div>
				<div style={styles.radioDiv}>
					<input
						type="radio"
						style={{ ...styles.input, ...styles.radioInput }}
						name="accountCurrency"
					/>
					<h2 style={{ ...styles.h2, ...styles.color }}>GBP</h2>
				</div>
			</div>

			<label for="accountLeverage" style={styles.label}>
				Account Leverage
			</label>
			<div style={styles.textInputDiv}>
				<input
					key={2}
					type="text"
					name="accountLeverage"
					placeholder="1:500"
					style={{ ...styles.textInput, ...styles.input }}
				/>
				{arrowIcon}
			</div>

			<label for="SwapFree" style={styles.label}>
				Swap Free
			</label>
			<div style={styles.checkboxDiv}>
				<input
					type="checkbox"
					style={{ ...styles.input, ...styles.checkbox }}
				/>
				<p style={{ ...styles.color, ...styles.checkboxText }}>
					I want this account to be swap free
				</p>
			</div>

			<label for="TradingAccountPassword" style={styles.label}>
				Trading Account Password
			</label>
			<div style={{ ...styles.input, ...styles.passwordDiv }}>
				<div style={{ display: "flex", alignItems: "center" }}>
					<input type="password" style={styles.password} />
					{eyeIcon}
				</div>
				<div style={styles.passwordLowerDiv}>
					<SiVerizon size={V_ICON_SIZE} color={styles.color.color} />
					<p style={{ ...styles.color, ...styles.bottomPasswordText }}>
						A-Z, a-z, 0-9
					</p>
					<SiVerizon size={V_ICON_SIZE} color={styles.color.color} />
					<p style={{ ...styles.color, ...styles.bottomPasswordText }}>
						Capital
					</p>
					<SiVerizon size={V_ICON_SIZE} color={styles.color.color} />
					<p style={{ ...styles.color, ...styles.bottomPasswordText }}>Small</p>
					<SiVerizon size={V_ICON_SIZE} color={styles.color.color} />
					<p style={{ ...styles.color, ...styles.bottomPasswordText }}>
						Number
					</p>
					<SiVerizon size={V_ICON_SIZE} color={styles.color.color} />
					<p style={{ ...styles.color, ...styles.bottomPasswordText }}>
						8-20 Characters
					</p>
				</div>
			</div>

			<label for="ConfirmTradingAccountPassword" style={styles.label}>
				Confirm Trading Account Password
			</label>
			<div>
				<input
					type="password"
					style={{ ...styles.input, ...styles.password }}
				/>
			</div>

			<div style={styles.btns}>
				<input
					type="submit"
					value="Open Account"
					style={{ ...styles.input, ...blueBtnStyle }}
				/>
				<a href="#" style={{ ...styles.previousPage, ...styles.color }}>
					Previous Step
				</a>
			</div>
		</form>
	);
};

export default Radium(FormNewAccount);
