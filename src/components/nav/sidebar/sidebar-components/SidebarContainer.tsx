import { sizes } from '@/lib/constants';
import { FlexProps, Flex } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

const SidebarContainer: FC<FlexProps & { children: ReactNode }> = ({ children, ...props }) => {
	return <Flex sx={{ ...styles.container, ...props }}>{children}</Flex>;
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
};

export default SidebarContainer;
