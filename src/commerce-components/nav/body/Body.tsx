import { FlexChild, sizes } from '../../';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

const Body: FC<FlexChild> = ({ children, ...props }) => {
	return (
		<Flex
			flexDir='column'
			minH={sizes.BODY_MIN_HEIGHT}
			{...props}>
			{children}
		</Flex>
	);
};

export default Body;
