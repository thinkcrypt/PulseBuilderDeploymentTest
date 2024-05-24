import React, { ReactNode } from 'react';
import { Center } from '@chakra-ui/react';

const RightContainer = ({ children }: { children: ReactNode }) => {
	return (
		<Center
			h={{ base: '30vh', md: '100vh' }}
			w='full'
			pt={{ base: '92px', md: '32px' }}
			pb={{ base: '24px', md: '128px' }}
			borderLeftWidth={1}
			borderRightWidth={1}
			borderColor='stroke.deepL'
			_dark={{ borderColor: 'stroke.deepD' }}>
			{children}
		</Center>
	);
};

export default RightContainer;
