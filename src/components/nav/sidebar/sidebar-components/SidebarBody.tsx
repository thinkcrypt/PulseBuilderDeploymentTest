import { Stack, StackProps } from '@chakra-ui/react';
import React from 'react';

type SidebarContainerProps = StackProps & {
	children: React.ReactNode;
};

const SidebarBody: React.FC<SidebarContainerProps> = ({ children, ...props }) => {
	return (
		<Stack
			w='full'
			p={4}
			px={3}
			spacing={1}
			pt={0}
			direction='column'
			{...props}>
			{children}
		</Stack>
	);
};

export default SidebarBody;
