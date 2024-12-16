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
			bg={THEME == 'basic' ? 'navbar.light' : 'navbar.light'}
			borderBottomColor='navbar.borderBottomLight'
			borderBottomWidth={1}
			alignItems='center'
			_dark={{
				bg: THEME == 'basic' ? 'sidebar.dark' : 'navbar.light',
				borderBottomColor: 'navbar.borderBottomDark',
			}}
			{...props}>
			{children}
		</Flex>
	);
};

export default SidebarLogo;
