import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type FlexColumnProps = FlexProps & {
	children?: ReactNode;
};
const FlexColumn: FC<FlexColumnProps> = ({ children, ...props }) => {
	return (
		<Flex flexDir='column' {...props}>
			{children}
		</Flex>
	);
};

export default FlexColumn;
