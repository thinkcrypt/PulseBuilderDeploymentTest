import { FlexChild } from '../../';
import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';

const LandingSection: FC<FlexChild> = ({ children, ...props }) => {
	return (
		<Flex
			p='16px'
			{...props}>
			{children}
		</Flex>
	);
};

export default LandingSection;
