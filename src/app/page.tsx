'use client';

import { Grid, Flex, Heading, Text, Button } from '@chakra-ui/react';

import {
	Layout,
	Column,
	DynamicFilters,
	SpaceBetween,
	Align,
	FlexChild,
	DashContainer,
	useAppDispatch,
	useAppSelector,
	resetBuilder,
} from '@/components/library';

import {
	DashboardOverview,
	OrderAnalytics,
	MarketingAnalytics,
	TopCustomers,
	TopProducts,
	OrderTable,
	ShopQr,
} from '@/components/dashboard';

import Link from 'next/link';
import { useEffect } from 'react';

export default function UserFeedback() {
	return (
		<Layout
			title='Dashboard'
			path='dashboard'>
			<Grid
				pt={{ base: 2, md: 4 }}
				gridTemplateColumns={{ base: '1fr', md: '1fr' }}
				gap={2}>
				<ShopQr />
			</Grid>
			<Grid
				gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
				gap={2}>
				<DashboardOverview />
			</Grid>
			<Col>
				<Heading size='md'>Marketing</Heading>
				<Grid
					gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
					gap={2}>
					<MarketingAnalytics />
				</Grid>
			</Col>
			<Col>
				<Heading size='md'>Order Analytics</Heading>
				<Column gap={4}>
					<Align gap={2}>
						<Flex h='full'>
							<Text>Filters:</Text>
						</Flex>
						<DynamicFilters path='orders' />
					</Align>
					<OrderAnalytics title='Order Analytics' />
				</Column>

				<Col
					gap={2}
					pb={2}>
					<DashContainer>
						<SpaceBetween
							align='center'
							px={4}>
							<Heading size='md'>Recent Orders</Heading>
							<Link href='/orders'>
								<Button size='xs'>View Orders</Button>
							</Link>
						</SpaceBetween>
						<OrderTable />
					</DashContainer>
				</Col>
				<Column gap={2}>
					<DashContainer>
						<SpaceBetween
							align='center'
							px={4}>
							<Heading size='md'>Top Selling Products</Heading>
						</SpaceBetween>
						<TopProducts />
					</DashContainer>
				</Column>
				<Column gap={2}>
					<DashContainer>
						<SpaceBetween
							align='center'
							px={4}>
							<Heading size='md'>Top Customers</Heading>
						</SpaceBetween>
						<TopCustomers />
					</DashContainer>
				</Column>
			</Col>
		</Layout>
	);
}

const Col = ({ children, ...props }: FlexChild) => (
	<Column
		gap={6}
		py={6}
		{...props}>
		{children}
	</Column>
);
