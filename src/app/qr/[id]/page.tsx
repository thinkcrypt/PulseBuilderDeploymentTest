'use client';

import { useGetProductsByQrQuery } from '@/store/services/productsApi';
import { Flex, Heading, Text, Image, Center } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'next/navigation';
import FoodMenuItem from '@/components/menu/FoodMenuItem';
import Column from '@/components/containers/Column';
import { useGetByIdQuery } from '@/store/services/commonApi';

const QrMenuPage = () => {
	const { id } = useParams();
	const { data, isFetching } = useGetProductsByQrQuery(id);

	const { data: restaurant, isFetching: restaurantFetching } = useGetByIdQuery(
		{ path: 'restaurant', id: id },
		{ skip: !id }
	);

	return (
		<Column
			gap={2}
			w='full'>
			{!restaurantFetching && restaurant && restaurant?.image && (
				<Center
					flexDir='column'
					gap={4}
					pb='44px'>
					<Image
						w='200px'
						h='200px'
						objectFit='contain'
						src={restaurant?.image}
					/>
					<Heading
						size='3xl'
						textAlign='center'
						fontFamily='Bebas neue'>
						{restaurant?.name}
					</Heading>
				</Center>
			)}
			<Heading
				size='2xl'
				fontFamily='Bebas neue'>
				MENU
			</Heading>
			{data &&
				data.map((item: any, i: number) => (
					<Column
						key={i}
						py={6}>
						<Heading
							size='xl'
							fontFamily='Bebas neue'>
							{item?.category?.name}
						</Heading>
						<Text color='#555'>
							<i>{item?.category?.description}</i>
						</Text>
						<Column
							py={2}
							gap={4}>
							{item?.items?.map((menu: any, j: number) => (
								<FoodMenuItem
									key={j}
									name={menu?.name}
									price={menu?.price}
									description={menu?.description}
									isDiscounted={menu?.isDiscount}
									discountedPrice={menu?.discountPrice}
									longDescription={menu?.longDescription}
									image={menu?.image}
								/>
							))}
						</Column>
					</Column>
				))}
		</Column>
	);
};

export default QrMenuPage;
