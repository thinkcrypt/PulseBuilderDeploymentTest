import React, { FC } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import FoodMenuModal from './FoodMenuModal';

type FoodMenuItemProps = {
	name: string;
	price: number;
	description: string;
	isDiscounted?: boolean;
	discountedPrice?: number;
	longDescription: string;
	image: string;
};

const FoodMenuItem: FC<FoodMenuItemProps> = ({
	name,
	price,
	description,
	isDiscounted,
	discountedPrice,
	longDescription,
	image,
}) => {
	return (
		<FoodMenuModal
			name={name}
			price={price}
			image={image}
			description={longDescription || description}
			isDiscounted={isDiscounted}
			discountedPrice={discountedPrice}>
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
		</FoodMenuModal>
	);
};

export default FoodMenuItem;
