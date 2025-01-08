import { Link } from '@chakra-ui/react';
import React from 'react';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoTwitter } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';

const icons: { [key: string]: React.ElementType } = {
	instagram: IoLogoInstagram,
	facebook: IoLogoFacebook,
	twitter: IoLogoTwitter,
	linkedin: IoLogoLinkedin,
	youtube: IoLogoYoutube,
};

const FooterIcon = ({ name, href, color }: { name: string; href: string; color: string }) => {
	const IconComponent = icons[name] || IoLogoInstagram;

	return (
		<Link
			href={href}
			isExternal>
			<IconComponent
				size={22}
				color={color}
			/>
		</Link>
	);
};

export default FooterIcon;
