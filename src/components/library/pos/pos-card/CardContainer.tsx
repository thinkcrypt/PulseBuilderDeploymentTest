import { Center, CenterProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

const CardContainer: FC<CenterProps & { children: ReactNode }> = ({ children, ...props }) => {
	return (
		<Center
			userSelect='none'
			cursor='pointer'
			flexDir='column'
			bg='card.light'
			_dark={{ bg: 'card.dark' }}
			p={4}
			flex={1} // Add this
			minW={{ base: '100%', md: '160px' }} // Add this}}
			maxW={{ base: '160px', md: '300px' }} // Add this
			borderRadius='8px'
			gap={4}
			{...props}>
			{children}
		</Center>
	);
};

export default CardContainer;
