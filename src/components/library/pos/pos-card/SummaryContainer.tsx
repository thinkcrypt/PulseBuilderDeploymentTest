import React, { ReactNode } from 'react';
import { Column } from '@/components/library';
import { FlexProps } from '@chakra-ui/react';

const HEIGHT = 'calc(100vh - 52px)';

const SummaryContainer = ({ children, ...props }: FlexProps & { children: ReactNode }) => {
	return (
		<Column
			display={{ base: 'none', md: 'flex' }}
			h={HEIGHT}
			bg='white'
			w='350px'
			_dark={{ bg: 'background.dark' }}
			{...props}>
			{children}
		</Column>
	);
};

export default SummaryContainer;
