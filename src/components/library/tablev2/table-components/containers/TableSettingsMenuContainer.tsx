import { Flex } from '@chakra-ui/react';
import SpaceBetween from '../../../containers/SpaceBetween';
import React, { ReactNode } from 'react';

const TableSettingsMenuContainer = ({ children }: { children: ReactNode }) => {
	return (
		<SpaceBetween
			p={2}
			border='1px solid transparent'>
			<Flex
				flexDir={{ base: 'column-reverse', md: 'row' }}
				align={{ base: 'flex-start', md: 'center' }}
				gap={{ base: 2, md: 1 }}
				justify='space-between'
				w='100%'>
				{children}
			</Flex>
		</SpaceBetween>
	);
};

export default TableSettingsMenuContainer;
