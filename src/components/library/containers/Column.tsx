import { FlexPropsType } from '@/types';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';

const Column: FC<FlexPropsType> = ({ children, ...props }) => {
	return (
		<Flex
			flexDir='column'
			gap={1}
			{...props}>
			{children}
		</Flex>
	);
};

export default Column;
