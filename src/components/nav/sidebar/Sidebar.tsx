'use client';
import { FlexProps, Heading, Spacer, Stack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import SidebarItem from './SidebarItem';
import sidebar from '@/lib/data/sidebar.data';
import { useGetSelfQuery } from '@/store/services/authApi';
import { SidebarContainer, SidebarBody, SidebarHeading, SidebarLogo } from './sidebar-components';
import useIsMobile from '@/components/library/hooks/useIsMobile';

const Sidebar: React.FC<FlexProps & { closeBtn?: ReactNode }> = ({ closeBtn, ...props }) => {
	const { data } = useGetSelfQuery({});
	const mainHeight = '82vh';

	const title = data?.restaurant?.name || '--';
	const isMobile = useIsMobile();

	const main = (
		<>
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
		</>
	);
	return (
		<SidebarContainer {...props}>
			<SidebarLogo>
				<Heading
					size='md'
					fontFamily='Bebas Neue'>
					{title}
				</Heading>
				{closeBtn && closeBtn}
			</SidebarLogo>
			<SidebarBody>{main}</SidebarBody>
		</SidebarContainer>
	);
};

export default Sidebar;
