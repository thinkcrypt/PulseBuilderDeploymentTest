import { StatProps, Stat } from '@chakra-ui/react';
import React from 'react';
import { shadow } from '../../';

const StatContainer = ({ children, ...props }: StatProps & { children: React.ReactNode }) => {
	return (
		<Stat
			alignItems='center'
			w='full'
			p={4}
			bg='white'
			boxShadow={shadow?.DASH}
			_dark={{ bg: 'menu.dark' }}
			borderRadius={16}>
			{children}
		</Stat>
	);
};

export default StatContainer;
