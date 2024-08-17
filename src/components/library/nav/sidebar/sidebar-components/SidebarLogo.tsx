import React, { FC, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import { sizes } from '../../../';

type SidebarLogoProps = {
	children: ReactNode;
};

const style = {
	h: sizes.NAV_HEIGHT || 12,
	px: 5,
	width: '100%',
	bg: 'navbar.light',
	borderBottomColor: 'navbar.light',
	alignItems: 'center',
	_dark: {
		bg: 'navbar.light',
		borderBottomColor: 'sidebar.dark',
	},
};

const SidebarLogo: FC<SidebarLogoProps> = ({ children }) => {
	return <Flex sx={style}>{children}</Flex>;
};

export default SidebarLogo;
