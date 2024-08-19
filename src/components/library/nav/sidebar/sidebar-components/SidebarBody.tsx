import React, { FC, ReactNode } from 'react';
import { Stack, StackProps } from '@chakra-ui/react';
import { theme } from '../../../';

type SidebarBodyProps = StackProps & {
	children: ReactNode;
};

const BODY_HEIGHT = theme.SIDEBAR.body.heigth;

const SidebarBody: FC<SidebarBodyProps> = ({ children }) => {
	return (
		<Stack
			maxH={BODY_HEIGHT}
			h={BODY_HEIGHT}
			overflowY='scroll'
			spacing={{ base: 2, md: 1 }}>
			{children}
		</Stack>
	);
};

export default SidebarBody;
