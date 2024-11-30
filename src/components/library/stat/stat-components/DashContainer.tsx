import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';
import { shadow } from '../../';

const DashContainer = ({ children, ...props }: FlexProps & { children: React.ReactNode }) => {
	return (
		<Flex
			gap={2}
			flexDir='column'
			w='full'
			p={6}
			pb={2}
			bg='white'
			boxShadow={shadow?.DASH}
			_dark={{ bg: 'menu.dark' }}
			borderRadius={16}
			{...props}>
			{children}
		</Flex>
	);
};

export default DashContainer;
