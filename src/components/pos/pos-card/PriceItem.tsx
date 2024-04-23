import { Flex, Heading, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { currency } from '@/lib/constants';

type PriceItemProps = {
	title: string;
	children: number;
	heading?: boolean;
};

const PriceItem: FC<PriceItemProps> = ({ title, children, heading }) => {
	const Component = heading ? Heading : Text;
	return (
		<Flex justify='space-between' gap={2} fontSize={!heading ? '.95rem' : '1rem'}>
			<Component size='sm'>{title}</Component>
			<Component textAlign='right' size='sm'>
				{currency.symbol}
				{children?.toLocaleString() || 0}
			</Component>
		</Flex>
	);
};

export default PriceItem;
