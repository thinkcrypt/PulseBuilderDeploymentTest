import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import { SpaceBetween } from '../../../../..';

const SelectedItemsContainer = ({ children }: { children: ReactNode }) => {
	return (
		<Flex
			p={2}
			w='full'
			py={2}>
			<SpaceBetween
				px={2}
				pl={0}
				w='full'
				borderRadius='full'
				border='1px dashed'
				borderColor='gray.400'
				color='gray.600'
				fontWeight='600'
				_dark={{
					borderColor: 'gray.400',
					color: 'gray.200',
				}}>
				{children}
			</SpaceBetween>
		</Flex>
	);
};

export default SelectedItemsContainer;
