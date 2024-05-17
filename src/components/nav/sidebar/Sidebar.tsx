'use client';
import { Flex, FlexProps, Heading, Spacer, Stack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import SidebarItem from './SidebarItem';
import sidebar from '@/lib/data/sidebar.data';
import { useGetSelfQuery } from '@/store/services/authApi';
import SidebarBody from './sidebar-components/SidebarBody';
import SidebarHeading from './sidebar-components/SidebarHeading';
import SidebarContainer from './sidebar-components/SidebarContainer';
import useIsMobile from '@/components/library/hooks/useIsMobile';

const Sidebar: React.FC<FlexProps & { closeBtn?: ReactNode }> = ({ closeBtn, ...props }) => {
	const { data } = useGetSelfQuery({});
	const mainHeight = '82vh';

	const title = data?.restaurant?.name || '--';

	const isMobile = useIsMobile();

	const main = (
		<SidebarBody>
			<Stack
				maxH={mainHeight}
				h={mainHeight}
				overflowY='scroll'
				spacing={{ base: 2, md: 1 }}>
				{sidebar.slice(0, -1).map((item, i) => (
					<Stack key={i}>
						{item?.startOfSection && <SidebarHeading>{item?.sectionTitle}</SidebarHeading>}
						<SidebarItem
							href={item?.href}
							path={item?.path}
							icon={item?.icon}>
							{item?.title}
						</SidebarItem>
					</Stack>
				))}
			</Stack>
			<Spacer />
			{sidebar.length > 0 && (
				<SidebarItem
					sx={isMobile ? { mb: 12 } : {}}
					key={sidebar.length - 1}
					href={sidebar[sidebar.length - 1]?.href}
					path={sidebar[sidebar.length - 1]?.path}
					icon={sidebar[sidebar.length - 1].icon}>
					{sidebar[sidebar.length - 1]?.title}
				</SidebarItem>
			)}
		</SidebarBody>
	);
	return (
		<SidebarContainer {...props}>
			<Flex sx={styles.logo}>
				<Heading
					size='md'
					fontFamily='Bebas Neue'>
					{title}
				</Heading>
				{closeBtn && closeBtn}
			</Flex>
			<Flex flex={1}>{main}</Flex>
		</SidebarContainer>
	);
};

const styles = {
	logo: {
		h: 16,
		px: 5,
		width: '100%',
		borderBottomWidth: 2,
		borderBottomColor: 'stroke.light',
		alignItems: 'center',
		_dark: {
			borderBottomColor: 'stroke.dark',
		},
	},
};

export default Sidebar;
