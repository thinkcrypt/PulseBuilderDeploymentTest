import React, { FC, ReactNode } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import { sizes, THEME } from '../../../';

type SidebarLogoProps = FlexProps & {
	children: ReactNode;
};

const SidebarLogo: FC<SidebarLogoProps> = ({ children, ...props }) => {
	return (
		<Flex
			h={sizes.NAV_HEIGHT || 12}
			px={5}
			width='100%'
			bg={THEME == 'basic' ? 'sidebar.light' : 'navbar.light'}
			borderBottomColor='navbar.light'
			alignItems='center'
			_dark={{
				bg: THEME == 'basic' ? 'sidebar.dark' : 'navbar.light',
				borderBottomColor: 'sidebar.dark',
			}}
			{...props}>
			{children}
		</Flex>
	);
};

export default SidebarLogo;
