import React from "react";
import OpenNewAccount from "../newAccountContent/openNewAccount";
import { COLORS } from "../UI/constants";
import Footer from "../UI/footer/footer";
import TopBar from "../UI/topBar";

const styles = {
	main: {
		background: COLORS.mainContentBackground,
		width: "78vw",
	},
	contentPadding: {
		width: "100%",
		padding: "0 3% 0 3%",
	},
};

const MainContent = (props) => {
	return (
		<div style={{ ...props.style, ...styles.main }}>
			<TopBar />
			<div style={styles.contentPadding}>
				<OpenNewAccount />
				<Footer />
			</div>
		</div>
	);
};

export default MainContent;
