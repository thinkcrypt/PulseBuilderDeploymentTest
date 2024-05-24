import React from 'react';
import { Grid, GridProps } from '@chakra-ui/react';

type SectionContainersProps = GridProps & {
	children: React.ReactNode;
};

const SectionContainer: React.FC<SectionContainersProps> = ({ children, ...props }) => {
	return (
		<Grid
			gridTemplateColumns='1fr 1fr 1fr'
			gap={8}
			w='full'
			{...props}>
			{children}
		</Grid>
	);
};

export default SectionContainer;
