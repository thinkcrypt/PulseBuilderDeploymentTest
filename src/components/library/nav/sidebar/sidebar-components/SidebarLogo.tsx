import React, { FC, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

type SidebarLogoProps = {
	children: ReactNode;
};

const style = {
	h: 16,
	px: 5,
	width: '100%',
	borderBottomWidth: 2,
	borderBottomColor: 'stroke.light',
	alignItems: 'center',
	_dark: {
		borderBottomColor: 'stroke.dark',
	},
};

const SidebarLogo: FC<SidebarLogoProps> = ({ children }) => {
	return <Flex sx={style}>{children}</Flex>;
};

export default SidebarLogo;
