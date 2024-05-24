import Column from '@/components/containers/Column';
import React, { ReactNode } from 'react';

const LeftContainer = ({ children }: { children: ReactNode }) => {
	return (
		<Column
			pt={{ base: 0, md: '64px' }}
			pb='48px'
			h={{ base: '70vh', md: '100vh' }}
			overflow='scroll'
			borderLeftWidth={1}
			borderColor='stroke.deepL'
			_dark={{ borderColor: 'stroke.deepD' }}>
			{children}
		</Column>
	);
};

export default LeftContainer;
