'use client';

import { Grid } from '@chakra-ui/react';

import { Layout, Count } from '@/components/library';

export default function Home() {
	return (
		<Layout
			title='Dashboard'
			path='dashboard'>
			<Grid
				gridTemplateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
				gap={2}>
				<Count
					title='Orders'
					path='orders'
				/>
				<Count
					title='Total Products'
					path='products'
				/>
				{/* <Count
					title='Total Items'
					path='items'
				/> */}
				<Count
					title='Categories'
					path='categories'
				/>
			</Grid>
		</Layout>
	);
}
