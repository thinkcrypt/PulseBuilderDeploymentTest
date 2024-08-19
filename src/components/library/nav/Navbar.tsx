'use client';

import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import SideDrawer from './sidebar/SideDrawer';
import { useIsMobile, sizes, zIndex, padding } from '../';

type FlexPropsType = FlexProps & {
	children: ReactNode;
};

const PX = { base: padding.BASE, md: padding.MD, lg: padding.LG };

const Navbar: FC<FlexPropsType> = ({ children, ...props }) => {
	const styles = {
		container: {
			h: sizes.NAV_HEIGHT || 12,
			poistion: 'fixed',
			top: 0,
			left: 0,
			alignItems: 'center',
			bg: 'navbar.light',
			borderBottomWidth: 2,
			borderBottomColor: 'stroke.light',
			px: PX,
			w: '100vw',
			zIndex: zIndex.NAV || 999,
			_dark: {
				bg: 'navbar.dark',
				borderBottomColor: 'stroke.dark',
			},
			...props,
		},
	};

	const isMobile = useIsMobile();

	return (
		<Flex
			sx={styles.container}
			position='fixed'>
			{isMobile && <SideDrawer />}
			{children}
		</Flex>
	);
};

export default Navbar;
