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
	useSum,
	ShowSum,
} from '@/components/library';
import OrderTable from '@/components/dashboard/OrderTable';
import Link from 'next/link';
import TopProducts from '@/components/dashboard/TopProducts';
import TopCustomers from '@/components/dashboard/TopCustomers';

export default function UserFeedback() {
	const { filters } = useAppSelector((state: any) => state.table);

	const getUpdatedFilters = (filters: any) => {
		return {
			...(filters?.createdAt_btwn && { date_btwn: filters?.createdAt_btwn }),
			...(filters?.createdAt_eq && { date_eq: filters?.createdAt_eq }),
			...(filters?.createdAt_last && { date_last: filters?.createdAt_last }),
			...(filters?.createdAt_gte && { date_gte: filters?.createdAt_gte }),
			...(filters?.createdAt_lte && { date_lte: filters?.createdAt_lte }),
		};
	};

	const netProfit: number = useSum({ path: 'orders', field: 'profit', filters });
	const expenses: number = useSum({
		path: 'expenses',
		field: 'amount',
		filters: getUpdatedFilters(filters),
	});

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
				<Sum
					title='Total Receivable'
					path='orders'
					field='dueAmount'
					price
				/>
				<Sum
					title='Inventory Value[Cost]'
					path='products'
					field='inventoryCostPrice'
					price
				/>
				<Sum
					title='Inventory Value[Sell]'
					path='products'
					field='inventorySellPrice'
					price
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
							title='Gross Profit'
							path='orders'
							field='profit'
							filters={filters}
							price
						/>

						<Sum
							title='Invoice Due'
							path='orders'
							field='dueAmount'
							filters={filters}
							price
						/>
						{/* <p>{JSON.stringify(filters)}</p> */}
						<Sum
							title='Expenses'
							path='expenses'
							field='amount'
							filters={getUpdatedFilters(filters)}
							price
						/>
						<ShowSum
							tooltip='Net Profit = Gross Profit - Expenses'
							title='Net Profit'
							price>
							{netProfit - expenses}
						</ShowSum>
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
