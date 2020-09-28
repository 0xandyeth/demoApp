import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const LINKS_SIZES = "1.2rem";
const LINK_COLOR = "#517AEA";

const SocialMedia = (props) => {
	return (
		<ul style={{ ...props.style }}>
			<li>
				<AiFillLinkedin size={LINKS_SIZES} color={LINK_COLOR} />
			</li>
			<li>
				<FaFacebook size={LINKS_SIZES} color={LINK_COLOR} />
			</li>
			<li>
				<RiInstagramFill size={LINKS_SIZES} color={LINK_COLOR} />
			</li>
			<li>
				<FaYoutube size={LINKS_SIZES} color={LINK_COLOR} />
			</li>
			<li>
				<FaTwitter size={LINKS_SIZES} color={LINK_COLOR} />
			</li>
		</ul>
	);
};

export default SocialMedia;
