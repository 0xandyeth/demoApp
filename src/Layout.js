import React from "react";
import MainContent from "./mainContent/mainContent";
import OpenNewAccount from "./newAccountContent/openNewAccount";
import Sidebar from "./sidebar/sidebar";

const layoutStyle = {
	display: "grid",
	gridTemplateColumns: "22% 78%",
	gridTemplateRows: "auto",
	gridTemplateAreas: "col1 col2",
	fontFamily: "'Open Sans', sans-serif",
};

function Layout() {
	return (
		<div style={layoutStyle}>
			<Sidebar style={{ gridArea: "'col1'" }} />
			<MainContent style={{ gridArea: "'col2'" }} />
		</div>
	);
}

export default Layout;
