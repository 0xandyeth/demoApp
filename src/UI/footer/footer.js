import Radium from "radium";
import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import { COLORS } from "../constants";

import SocialMedia from "./socialMedia";

const styles = {
	footer: {
		width: "100%",
		background: COLORS.backgroundWhite,
		borderRadius: "10px",
		padding: "2rem 3rem",
		color: "rgb(0,0,0,0.5)",
	},
	creditsNSocial: {
		width: "100%",
		height: "50px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	ul: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		width: "18%",
	},
	h2: {
		fontSize: "0.95rem",
		marginBottom: "2rem",
		fontWeight: "bold",
	},
	p: {
		fontSize: "0.8rem",
		marginBottom: "1.2rem",
	},
	svgs: {
		display: "flex",
		margin: "0 auto",
		width: "20%",
		alignItems: "center",
	},
	svg: {
		marginRight: "3rem",
	},
	a: {
		textDecoration: "none",

		":hover": {
			textDecoration: "underline",
			cursor: "pointer",
		},
	},
};

const Footer = (props) => {
	return (
		<footer style={styles.footer}>
			<div>
				<h2 style={styles.h2}>
					ACCUINDEX LTD is authorized and regulated by the Cyprus Securities and
					Exchange Comission I (Cysec) in Cyprus (License number 340/17).
				</h2>
				<h2 style={styles.h2}>
					ACCUINDEX LTD is authorized and regulated by the Financial Service
					Comission (FSC) in Mauritius (License No GB19024778 )
				</h2>
				<p style={styles.p}>
					text placeholder text placeholdertext placeholdertext placeholdertext
					placeholdertext placeholdertext placeholdertext placeholdertext
					placeholdertext placeholdertext placeholdertext placeholdertext
					placeholdertext placeholdertext placeholdertext placeholdertext
					placeholdertext placeholdertext placeholdertext placeholdertext
					placeholdertext placeholdertext placeholdertext placeholdertext
					placeholdertext placeholdertext placeholdertext placeholdertext
					placeholdertext placeholder
				</p>
				<div style={styles.svgs}>
					<div style={styles.svg}>
						<BsExclamationSquareFill size="2rem" />
					</div>
					<div>
						{" "}
						<BsExclamationSquareFill size="2rem" />
					</div>
				</div>
			</div>
			<div style={styles.creditsNSocial}>
				<a style={styles.a} target="blank" href="#">
					© 2020 Acculndex. All rights reserved.
				</a>
				<SocialMedia style={styles.ul} />
			</div>
		</footer>
	);
};

export default Radium(Footer);
