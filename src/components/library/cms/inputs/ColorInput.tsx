import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const ColorInput = ({ value, title }: { value: string; title: string }) => (
	<Flex
		flexDir='column'
		gap={2}>
		<Heading size='sm'>{title}</Heading>
		<Flex
			border='1px solid'
			h='44px'
			w='100px'
			borderRadius='8px'
			bg={value}
		/>
	</Flex>
);

export default ColorInput;
