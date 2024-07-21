import React, { FC, ReactNode } from 'react';
import { Stack, StackProps } from '@chakra-ui/react';

type SidebarBodyProps = StackProps & {
	children: ReactNode;
};

const BODY_HEIGHT = '82vh';

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
