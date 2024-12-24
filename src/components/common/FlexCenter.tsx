import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type FlexCenterProps = FlexProps & {
	children?: ReactNode;
};
const FlexCenter: FC<FlexCenterProps> = ({ children, ...props }) => {
	return (
		<Flex justifyContent='center' alignItems='center' {...props}>
			{children}
		</Flex>
	);
};

export default FlexCenter;
