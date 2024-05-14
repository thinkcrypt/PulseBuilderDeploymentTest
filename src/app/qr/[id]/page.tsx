'use client';

import { useGetProductsByQrQuery } from '@/store/services/productsApi';
import { Flex, Heading, Text, Image, Center } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'next/navigation';
import FoodMenuItem from '@/components/menu/FoodMenuItem';
import Column from '@/components/containers/Column';
import { useGetByIdQuery } from '@/store/services/commonApi';
import Icon from '@/components/library/icon/Icon';
import Link from 'next/link';

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
									tags={menu?.tags}
									time={menu?.time || 0}
								/>
							))}
						</Column>
					</Column>
				))}
			<Center
				flexDir='column'
				mt='16px'
				p='24px'
				gap={4}
				borderRadius='8px'>
				<Heading
					size='lg'
					fontFamily='Bebas Neue'>
					{`We'd love your feedback`}
				</Heading>
				<Icon
					size={64}
					name='feedback'
				/>
				<Link
					href={`/user-feedback/${id}`}
					style={{ color: 'dodgerblue', textDecorationLine: 'underline' }}>
					<i>Send us your Feedback</i>
				</Link>
			</Center>
		</Column>
	);
};

export default QrMenuPage;
