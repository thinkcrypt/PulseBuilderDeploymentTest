import React, { ReactNode } from 'react';
import { Column } from '@/components/library';

const HEIGHT = 'calc(100vh - 52px)';

const SummaryContainer = ({ children }: { children: ReactNode }) => {
	return (
		<Column
			h={HEIGHT}
			bg='white'
			w='350px'
			_dark={{ bg: 'background.dark' }}>
			{children}
		</Column>
	);
};

export default SummaryContainer;
