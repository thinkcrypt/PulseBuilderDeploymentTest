'use client';

import { zIndex } from '@/lib/constants';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import SideDrawer from './sidebar/SideDrawer';
import { useIsMobile } from '../';

type FlexPropsType = FlexProps & {
	children: ReactNode;
};

const Navbar: FC<FlexPropsType> = ({ children, ...props }) => {
	const styles = {
		container: {
			h: 16,
			poistion: 'fixed',
			top: 0,
			left: 0,
			alignItems: 'center',
			bg: { base: 'container.light', md: 'container.light' },
			borderBottomWidth: 2,
			borderBottomColor: 'stroke.light',
			w: '100vw',
			zIndex: zIndex.NAV,
			_dark: {
				bg: 'container.dark',
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
