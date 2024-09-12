import { FlexChild, GridChild } from '../../../';
import { Flex, Grid } from '@chakra-ui/react';
import React, { FC } from 'react';

const HeaderContainer: FC<GridChild> = ({ children, ...props }) => {
	return (
		<Grid
			alignItems='center'
			w='100%'
			gridTemplateColumns='1fr 1fr 1fr'
			borderBottom='1px solid'
			borderBottomColor='eborder.600'
			h={16}>
			{children}
		</Grid>
	);
};

export default HeaderContainer;
