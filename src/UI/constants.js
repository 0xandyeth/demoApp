export const COLORS = {
	btnBlue: "#347BC4",
	labelBlue: "#3F97BE",
	backgroundWhite: "#fdfdfd",
	mainContentBackground: "#D2D0D0",
	grayBarGradientBottom: "#C6C6C6",
	grayBarGradientTop: "#EFEAEA",
	sidebarIconsColor: "#54BCF0",
	grayArrowColor: "#A9A9A9",
};

export const blueBtnStyle = {
	padding: "0.8rem 1.4rem",
	height: "3rem",
	width: "12rem",
	color: "white",
	background: COLORS.btnBlue,
	borderRadius: "8px",
	border: "none",
	fontSize: "1.1rem",
	textAlign: "center",
	outline: "none",

	":hover": {
		cursor: "pointer",
	},
};

export const shadowedBox = {
	borderRadius: "15px",
	boxShadow: "0 0 2px  black",
	border: "none",
	overflow: "hidden",
};
