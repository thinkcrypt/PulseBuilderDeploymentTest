'use client';

import { Flex, Grid, Wrap } from '@chakra-ui/react';
import Layout from '@/components/layout/Layout';
import Count from '@/components/library/stat/Count';

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
