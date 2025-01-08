import React from 'react';

import {
	FooterItemContainer,
	FooterIcon,
	FooterText,
	FooterTag,
	FooterContainer,
	FooterIconContainer,
} from '.';

const footerItems = [
	{
		name: 'About Us',
		href: '#',
	},
	{
		name: 'FAQs',
		href: '#',
	},
	{
		name: 'Contact Us',
		href: '#',
	},
];

const footerIcons = [
	{
		name: 'instagram',
		href: 'https://www.instagram.com/',
	},
	{
		name: 'facebook',
		href: 'https://www.facebook.com/',
	},
	{
		name: 'twitter',
		href: 'https://twitter.com/',
	},
	{
		name: 'linkedin',
		href: 'https://www.linkedin.com/',
	},
	{
		name: 'youtube',
		href: 'https://www.youtube.com/',
	},
];

const Footer = ({ data }: { data: any }) => {
	return (
		<FooterContainer data={data?.basic}>
			<FooterItemContainer>
				{footerItems.map((item, idx) => (
					<FooterText
						color={data?.basic?.footerFg}
						key={idx}
						href={item?.href}>
						{item?.name}
					</FooterText>
				))}
			</FooterItemContainer>
			<FooterIconContainer color={data?.basic?.footerBg}>
				{footerIcons.map((icon, idx) => (
					<FooterIcon
						color={data?.basic?.footerFg}
						key={idx}
						{...icon}
					/>
				))}
			</FooterIconContainer>
			<FooterTag data={data?.basic}>Copyright © 2024, powered by thinkcrypt.io</FooterTag>
		</FooterContainer>
	);
};

export default Footer;
