import React, { FC } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

type FoodMenuItemProps = {
	name: string;
	price: number;
	description: string;
	isDiscounted?: boolean;
	discountedPrice?: number;
};

const FoodMenuItem: FC<FoodMenuItemProps> = ({
	name,
	price,
	description,
	isDiscounted,
	discountedPrice,
}) => {
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

				<Flex
					gap={3}
					align='flex-end'>
					{isDiscounted && (
						<Text
							lineHeight={1.2}
							fontFamily='Bebas neue'
							// fontSize='14px'
							textDecorationLine='line-through'>
							BDT. {price}
						</Text>
					)}

					<Heading
						fontFamily='Bebas neue'
						size='md'>
						BDT. {isDiscounted ? discountedPrice : price}
					</Heading>
				</Flex>
			</Flex>
			<Text
				noOfLines={3}
				fontSize='14px'>
				{description}
			</Text>
		</Flex>
	);
};

export default FoodMenuItem;
