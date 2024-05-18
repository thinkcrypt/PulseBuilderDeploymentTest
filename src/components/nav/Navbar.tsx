'use client';
import { zIndex } from '@/lib/constants';
import { FlexPropsType } from '@/types';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import SideDrawer from './sidebar/SideDrawer';
import useIsMobile from '../library/hooks/useIsMobile';

const Navbar: FC<FlexPropsType> = ({ children, ...props }) => {
	const styles = {
		container: {
			h: 16,
			poistion: 'fixed',
			top: 0,
			left: 0,
			alignItems: 'center',
			bg: { base: 'background.400', md: 'container.light' },
			borderBottomWidth: 2,
			borderBottomColor: 'stroke.light',
			maxW: '100vw',
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
