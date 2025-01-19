import { Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';

import { Link } from '@chakra-ui/react';

import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoTwitter } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';
import { Align, HoverContentContainer } from '@/components/library';
import { useAppSelector } from '@/hooks';

const icons: { [key: string]: React.ElementType } = {
	instagram: IoLogoInstagram,
	facebook: IoLogoFacebook,
	twitter: IoLogoTwitter,
	linkedin: IoLogoLinkedin,
	youtube: IoLogoYoutube,
};

const bannerIcons = [
	{
		name: 'instagram',
		href: 'https://www.instagram.com/',
	},
	{
		name: 'linkedin',
		href: 'https://www.linkedin.com/',
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
		name: 'youtube',
		href: 'https://www.youtube.com/',
	},
];

const padding = {
	LAYOUT_X: 4,
	LAYOUT: 4,
};

const bannerHeight = '44px';
const bannerHeightMobile = '36px';

const sizes = {
	BANNER_HEIGHT: bannerHeight,
	BANNER_HEIGHT_BASE: bannerHeightMobile,
};

const ZhoeiBanner = ({ data, dataModel }: { data: any; dataModel: any }) => {
	const { display } = useAppSelector(state => state.builder);
	const BannerIcon = ({ name, href }: { name: string; href: string }) => {
		const IconComponent = icons[name] || IoLogoInstagram;
		return (
			<Link
				href={href}
				isExternal>
				<IconComponent
					size={20}
					color={data?.content?.banner?.fgColor}
				/>
			</Link>
		);
	};

	return (
		<HoverContentContainer
			title='Banner Section'
			data={data?.content}
			dataModel={dataModel}>
			<Grid
				{...(data?.content?.banner?.hide && { display: 'none' })}
				gridTemplateColumns={{ base: '1fr', md: display == 'sm' ? '1fr' : '1fr 1fr 1fr' }}
				px={padding.LAYOUT_X}
				bg={data?.content?.banner?.bgColor}
				h={{ base: sizes.BANNER_HEIGHT_BASE, md: sizes.BANNER_HEIGHT }}>
				{display == 'lg' && (
					<Flex
						align='center'
						gap={4}
						display={{ base: 'none', md: 'flex' }}>
						{bannerIcons.map((icon, idx) => (
							<BannerIcon
								key={idx}
								{...icon}
							/>
						))}
					</Flex>
				)}
				<Align
					h={{ base: sizes.BANNER_HEIGHT_BASE, md: sizes.BANNER_HEIGHT }}
					justify='center'
					flex={1}>
					<Text
						textAlign='center'
						letterSpacing='2px'
						color={data?.content?.banner?.fgColor}
						fontSize='.8rem'>
						{data?.content?.banner?.centerText}
					</Text>
				</Align>

				{display == 'lg' && (
					<Align justify='flex-end'>
						<Text
							textAlign='right'
							display={{ base: 'none', md: 'flex' }}
							letterSpacing='2px'
							color={data?.content?.banner?.fgColor}
							fontSize='.8rem'>
							{data?.content?.banner?.rightText}
						</Text>
					</Align>
				)}
			</Grid>
		</HoverContentContainer>
	);
};

export default ZhoeiBanner;
