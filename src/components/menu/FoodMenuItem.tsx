import React, { FC } from 'react';
import { Badge, Flex, Heading, Text, Wrap } from '@chakra-ui/react';
import FoodMenuModal from './FoodMenuModal';
import Icon from '../library/icon/Icon';
import CookingTime from './CookingTime';

type FoodMenuItemProps = {
	name: string;
	price: number;
	description: string;
	isDiscounted?: boolean;
	discountedPrice?: number;
	longDescription: string;
	image: string;
	tags: string[];
	time: number;
};

const FoodMenuItem: FC<FoodMenuItemProps> = ({
	name,
	price,
	description,
	isDiscounted,
	discountedPrice,
	longDescription,
	image,
	tags,
	time,
}) => {
	return (
		<FoodMenuModal
			name={name}
			tags={tags}
			price={price}
			image={image}
			description={longDescription || description}
			isDiscounted={isDiscounted}
			time={time}
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
			<CookingTime>{time}</CookingTime>
			<Text
				noOfLines={3}
				fontSize='14px'>
				{description}
			</Text>
			{tags && tags?.length > 0 && (
				<Wrap
					gap={2}
					py={2}>
					{tags?.map((tag: string, i) => (
						<Badge
							key={i}
							size='md'
							bg='white'
							variant='subtle'>
							{tag}
						</Badge>
					))}
				</Wrap>
			)}
		</FoodMenuModal>
	);
};

export default FoodMenuItem;
