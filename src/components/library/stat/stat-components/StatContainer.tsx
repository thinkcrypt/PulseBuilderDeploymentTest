import { StatProps, Stat } from '@chakra-ui/react';
import React from 'react';

const StatContainer = ({ children, ...props }: StatProps & { children: React.ReactNode }) => {
	return (
		<Stat
			alignItems='center'
			w='full'
			p={4}
			bg='white'
			boxShadow='0 2px 20px rgba(0,0,0,.07)'
			_dark={{ bg: 'menu.dark' }}
			borderRadius={16}>
			{children}
		</Stat>
	);
};

export default StatContainer;
