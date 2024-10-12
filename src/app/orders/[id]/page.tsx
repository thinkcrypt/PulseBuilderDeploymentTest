'use client';
import React from 'react';
import { Layout, useGetByIdQuery, OrderItems, Column, Grid } from '@/components/library';
import { useParams } from 'next/navigation';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { LeftSection, BasicDetails, OrderPayments } from './_components';

const OrderDetailPage = () => {
	const { id } = useParams();

	const { data, isFetching } = useGetByIdQuery(
		{
			path: 'orders',
			id: id,
		},
		{
			skip: !id,
		}
	);

	if (!data)
		return (
			<Layout
				title='Order details'
				path='orders'>
				...
			</Layout>
		);

	return (
		<Layout
			title={`Invoice #${data?.invoice}`}
			path='orders'>
			<BasicDetails data={data} />

			<Grid
				display={{ base: 'flex', md: 'grid' }}
				flexDir={{ base: 'column', md: 'row' }}
				gridTemplateColumns={{ base: '1fr', md: '3fr 2fr' }}
				gap={10}>
				<Flex flexDirection='column'>
					<OrderItems data={data} />
				</Flex>
				<Column
					flex={1}
					gap={4}>
					<Column
						gap={2}
						flex={1}>
						<LeftSection data={data} />
					</Column>
				</Column>
			</Grid>
			<OrderPayments invoice={data?.invoice} />
		</Layout>
	);
};

export default OrderDetailPage;
