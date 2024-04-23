import { zIndex } from '@/lib/constants';
import { FlexPropsType } from '@/types';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

const Navbar: FC<FlexPropsType> = ({ children, ...props }) => {
	const styles = {
		container: {
			h: 16,
			w: '100vw',
			poistion: 'fixed',
			top: 0,
			left: 0,
			alignItems: 'center',
			bg: 'container.light',
			borderBottomWidth: 2,
			borderBottomColor: 'stroke.light',
			zIndex: zIndex.NAV,
			_dark: {
				bg: 'container.dark',
				borderBottomColor: 'stroke.dark',
			},
			...props,
		},
	};
	return (
		<Flex sx={styles.container} position='fixed'>
			{children}
		</Flex>
	);
};

export default Navbar;
