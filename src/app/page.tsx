'use client';

import { Grid, Flex, Heading, Text } from '@chakra-ui/react';

import {
	Layout,
	Count,
	Column,
	Sum,
	DynamicFilters,
	useAppSelector,
	Align,
} from '@/components/library';

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
		</Layout>
	);
}
