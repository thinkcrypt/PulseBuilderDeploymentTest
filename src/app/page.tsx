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
					title='Total Scans'
					path='scans'
				/>
				<Count
					title='Total Items'
					path='items'
				/>
				<Count
					title='Categories'
					path='categories'
				/>
			</Grid>
		</Layout>
	);
}
