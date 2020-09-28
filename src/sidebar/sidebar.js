import React from "react";
// MdKeyboardArrowDown icone of down
// MdApps
import {
	RiDashboardFill,
	RiUserReceived2Line,
	RiComputerLine,
} from "react-icons/ri";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaHandshake } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { AiFillBank } from "react-icons/ai";

import SidebarRow from "./sidebarItems/sidebarRow";
import { COLORS } from "../UI/constants";

const styles = {
	main: {
		background: COLORS.backgroundWhite,
		width: "100%",
	},
	ul: {
		padding: 0,
		margin: 0,
	},
	logo: {
		margin: "2rem auto 0.5rem auto",
		width: "40%",
		height: "5rem",
		background: "blue",
	},
};

const ICON_SIZE = "1.5rem";
const ICON_COLOR = COLORS.sidebarIconsColor;

const Sidebar = (props) => {
	return (
		<div style={{ ...props.style, ...styles.main }}>
			<div style={styles.logo}>Logo</div>
			<ul style={styles.ul}>
				<SidebarRow
					icon={<RiDashboardFill size={ICON_SIZE} color={ICON_COLOR} />}
					text="DashBoard"
				/>
				<SidebarRow
					icon={<AiFillBank size={ICON_SIZE} color={ICON_COLOR} />}
					text="Accounts"
				/>
				<SidebarRow
					icon={<FaRegMoneyBillAlt size={ICON_SIZE} color={ICON_COLOR} />}
					text="Funds"
				/>
				<SidebarRow
					icon={<RiComputerLine size={ICON_SIZE} color={ICON_COLOR} />}
					text="Platforms"
				/>
				<SidebarRow
					icon={<FaHandshake size={ICON_SIZE} color={ICON_COLOR} />}
					text="Partnership"
				/>
				<SidebarRow
					icon={<BsFillPersonPlusFill size={ICON_SIZE} color={ICON_COLOR} />}
					text="Promotions"
				/>
				<SidebarRow
					icon={<RiUserReceived2Line size={ICON_SIZE} color={ICON_COLOR} />}
					text="My Profile"
				/>
				<SidebarRow
					icon={<BiNotepad size={ICON_SIZE} color={ICON_COLOR} />}
					text="My Documents"
				/>
				<SidebarRow
					icon={<FiSettings size={ICON_SIZE} color={ICON_COLOR} />}
					text="Settings"
				/>
			</ul>
		</div>
	);
};

export default Sidebar;
