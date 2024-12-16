import React, { FC, ReactNode } from 'react';
import { Stack, StackProps } from '@chakra-ui/react';
import { sizes, theme } from '../../../';

type SidebarBodyProps = StackProps & {
	children: ReactNode;
};

const BODY_HEIGHT = theme.SIDEBAR.body.heigth;

const SidebarBody: FC<SidebarBodyProps> = ({ children, ...props }) => {
	return (
		<Stack
			pr={sizes.SIDEBAR_PX}
			maxH={BODY_HEIGHT}
			h={BODY_HEIGHT}
			pt={4}
			overflowY='scroll'
			zIndex={9999}
			spacing={{ base: 0, md: 0.4 }}
			{...props}>
			{children}
		</Stack>
	);
};

export default SidebarBody;
