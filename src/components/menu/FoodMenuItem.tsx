import React, { FC } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

type FoodMenuItemProps = {
	name: string;
	price: number;
	description: string;
};

const FoodMenuItem: FC<FoodMenuItemProps> = ({ name, price, description }) => {
	return (
		<Flex
			borderBottom='2px dotted #333'
			w='full'
			py={2}
			gap={2}
			flexDir='column'>
			<Flex
				w='full'
				justify='space-between'
				align='flex-end'>
				<Heading
					size='sm'
					fontSize='20px'>
					{name}
				</Heading>
				<Heading
					fontFamily='Bebas neue'
					size='md'>
					BDT. {price}
				</Heading>
			</Flex>
			<Text fontSize='14px'>{description}</Text>
		</Flex>
	);
};

export default FoodMenuItem;
