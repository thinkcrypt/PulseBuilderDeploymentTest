'use client';

import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { sizes, zIndex, padding, EditorSideDrawer } from '../';

type FlexPropsType = FlexProps & {
	children: ReactNode;
	showMenu?: boolean;
	sidebarData?: any;
	doc?: any;
};

const PX = { base: padding.BASE, md: padding.MD, lg: padding.LG };

const EditorNavbar: FC<FlexPropsType> = ({ children, showMenu, sidebarData, doc, ...props }) => {
	return (
		<Flex
			{...container}
			{...props}
			position='fixed'>
			{showMenu && (
				<EditorSideDrawer
					doc={doc}
					sidebarData={sidebarData}
				/>
			)}
			{children}
		</Flex>
	);
};

const container: FlexProps = {
	h: sizes.NAV_HEIGHT || 12,
	top: 0,
	alignItems: 'center',
	borderBottomWidth: 1,
	bg: 'white',
	_light: {
		borderBottomColor: 'container.borderLight',
	},
	px: PX,
	w: '100vw',
	zIndex: zIndex.NAV || 999,
	_dark: {
		bg: 'navbar.dark',
		borderBottomColor: 'stroke.dark',
	},
	backdropFilter: 'blur(10px)',
};

export default EditorNavbar;
