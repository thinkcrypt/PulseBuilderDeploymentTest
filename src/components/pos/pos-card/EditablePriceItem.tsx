import React from 'react';
import { Flex, Input, Text, InputProps } from '@chakra-ui/react';

type EditablePriceItemProps = InputProps & {
	title: string;
};

const EditablePriceItem = ({ title, ...props }: EditablePriceItemProps) => {
	return (
		<Flex justify='space-between' gap={2}>
			<Text fontSize='.95rem'>{title}</Text>
			<Input w='72px' size='xs' type='number' {...props} />
		</Flex>
	);
};

export default EditablePriceItem;
