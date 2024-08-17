import { Column, sizes } from '../../../';
import { Stack, StackProps } from '@chakra-ui/react';
import React from 'react';

type SidebarContainerProps = StackProps & {
	children: React.ReactNode;
};

const SidebarContent: React.FC<SidebarContainerProps> = ({ children, ...props }) => {
	return (
		<Column
			flex={1}
			bg='sidebar.light'
			_dark={{ bg: 'sidebar.dark' }}
			borderTopRadius={{ base: '0', md: 'xl' }}
			w='full'
			px={3}
			pt={4}
			m={'16px'}
			my='0'
			zIndex='9999'
			{...props}>
			{children}
		</Column>
	);
};

export default SidebarContent;
