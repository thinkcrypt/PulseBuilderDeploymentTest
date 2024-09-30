'use client';

import { Grid, Flex, Heading, Text, Button } from '@chakra-ui/react';

import {
	Layout,
	Count,
	Column,
	Sum,
	DynamicFilters,
	useAppSelector,
	SpaceBetween,
	Align,
} from '@/components/library';
import OrderTable from '@/components/dashboard/OrderTable';
import Link from 'next/link';
import TopProducts from '@/components/dashboard/TopProducts';
import TopCustomers from '@/components/dashboard/TopCustomers';

export default function UserFeedback() {
	const { filters } = useAppSelector((state: any) => state.table);
	return (
		<Layout
			title='Dashboard'
			path='dashboard'>
			<Grid
				gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
				gap={2}>
				<Count
					title='Total Products'
					path='products'
				/>
				<Count
					title='Customers'
					path='customers'
				/>
				<Count
					title='Categories'
					path='categories'
				/>
			</Grid>
			<Column
				gap={6}
				py={6}>
				<Heading size='md'>Order Analytics</Heading>
				<Column gap={4}>
					<Align gap={2}>
						<Flex h='full'>
							<Text>Filters:</Text>
						</Flex>

						<DynamicFilters path='orders' />
					</Align>
					<Grid
						gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
						gap={2}>
						<Count
							title='Total Orders'
							path='orders'
							filters={filters}
						/>
						<Sum
							title='Order Value'
							path='orders'
							field='total'
							filters={filters}
							price
						/>

						<Sum
							title='Due Amount'
							path='orders'
							field='dueAmount'
							filters={filters}
							price
						/>
					</Grid>
				</Column>
				<Column
					gap={2}
					py={6}
					pb={2}>
					<SpaceBetween align='center'>
						<Heading size='md'>Recent Orders</Heading>
						<Link href='/orders'>
							<Button size='xs'>View Orders</Button>
						</Link>
					</SpaceBetween>
					<OrderTable />
				</Column>
				<Column gap={2}>
					<SpaceBetween align='center'>
						<Heading size='md'>Top Selling Products</Heading>
					</SpaceBetween>
					<TopProducts />
				</Column>
				<Column gap={2}>
					<SpaceBetween align='center'>
						<Heading size='md'>Top Customers</Heading>
					</SpaceBetween>
					<TopCustomers />
				</Column>
			</Column>
		</Layout>
	);
}
