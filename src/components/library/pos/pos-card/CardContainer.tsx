import { Center, CenterProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const CardContainer: FC<CenterProps & { children: ReactNode }> = ({ children, ...props }) => {
	return (
		<Center
			userSelect='none'
			as={motion.div}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			cursor='pointer'
			flexDir='column'
			bg='sidebar.light'
			_dark={{ bg: 'sidebar.dark' }}
			p={4}
			flex={1} // Add this
			minW='160px' // Add this
			maxW='300px' // Add this
			borderRadius='8px'
			gap={4}
			{...props}>
			{children}
		</Center>
	);
};

export default CardContainer;
