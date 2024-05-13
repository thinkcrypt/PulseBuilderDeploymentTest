'use client';

import { useGetProductsByQrQuery } from '@/store/services/productsApi';
import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'next/navigation';
import FoodMenuItem from '@/components/menu/FoodMenuItem';
import Column from '@/components/containers/Column';

const QrMenuPage = () => {
	const { id } = useParams();
	const { data } = useGetProductsByQrQuery(id);

	return (
		<Column
			gap={2}
			w='full'>
			<Heading
				size='3xl'
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
						<Text>{item?.description}</Text>
						<Column py={2}>
							{item?.items?.map((menu: any, j: number) => (
								<FoodMenuItem
									key={j}
									name={menu?.name}
									price={menu?.price}
									description={menu?.description}
								/>
							))}
						</Column>
					</Column>
				))}
		</Column>
	);
};

export default QrMenuPage;
