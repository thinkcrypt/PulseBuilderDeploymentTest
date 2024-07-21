import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type FlexPropsType = FlexProps & {
	children: ReactNode;
};

const Body: FC<FlexPropsType> = ({ children, ...props }) => {
	return (
		<Flex
			w='100%'
			minH='100vh'
			bg={{ base: 'background.400', md: 'background.light' }}
			_dark={{ bg: 'background.dark' }}
			{...props}>
			{children}
		</Flex>
	);
};

export default Body;
