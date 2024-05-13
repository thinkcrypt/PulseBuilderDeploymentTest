'use client';
import { Flex, FlexProps, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import SidebarItem from './SidebarItem';
import sidebar from '@/lib/data/sidebar.data';
import { sizes } from '@/lib/constants';
import { useGetSelfQuery } from '@/store/services/authApi';

const Sidebar: React.FC<FlexProps> = ({ ...props }) => {
	const { data } = useGetSelfQuery({});
	const mainHeight = '82vh';

	const title = data?.restaurant?.name || '--';

	const main = (
		<Stack
			w='full'
			p={4}
			px={3}
			spacing={1}
			pt={0}
			direction='column'>
			<Stack
				maxH={mainHeight}
				h={mainHeight}
				overflowY='scroll'
				spacing={1}>
				{sidebar.slice(0, -1).map((item, i) => (
					<Stack key={i}>
						{item.startOfSection && (
							<Text
								px={2}
								pt={4}
								fontSize='2xs'
								fontWeight='700'
								textTransform='uppercase'>
								{item.sectionTitle}
							</Text>
						)}
						<SidebarItem
							href={item?.href}
							path={item?.path}
							icon={item.icon}>
							{item?.title}
						</SidebarItem>
					</Stack>
				))}
			</Stack>
			<Spacer />
			{sidebar.length > 0 && (
				<SidebarItem
					key={sidebar.length - 1}
					href={sidebar[sidebar.length - 1]?.href}
					path={sidebar[sidebar.length - 1]?.path}
					icon={sidebar[sidebar.length - 1].icon}>
					{sidebar[sidebar.length - 1]?.title}
				</SidebarItem>
			)}
		</Stack>
	);
	return (
		<Flex sx={{ ...styles.container, ...props }}>
			<Flex sx={styles.logo}>
				<Heading
					size='md'
					fontFamily='Bebas Neue'>
					{title}
				</Heading>
			</Flex>
			<Flex flex={1}>{main}</Flex>
		</Flex>
	);
};

const styles = {
	container: {
		h: '100vh',
		position: 'fixed',
		maxH: '100vh',
		overflow: 'none',
		w: sizes.SIDEBAR_WIDTH,
		minW: sizes.SIDEBAR_WIDTH,
		borderRightWidth: 2,
		borderRightColor: 'stroke.light',
		flexDir: 'column',
		bg: 'sidebar.light',
		_dark: {
			borderRightColor: 'stroke.dark',
			bg: 'sidebar.dark',
		},
	},
	logo: {
		h: 16,
		px: 5,
		borderBottomWidth: 2,
		borderBottomColor: 'stroke.light',
		alignItems: 'center',
		_dark: {
			borderBottomColor: 'stroke.dark',
		},
	},
};

export default Sidebar;
