'use client';

import { Wrap } from '@chakra-ui/react';
import Layout from '@/components/layout/Layout';
import Count from '@/components/library/stat/Count';

export default function Home() {
	return (
		<Layout title='Dashboard'>
			<Wrap
				gap={2}
				flexWrap='wrap'>
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
			</Wrap>
		</Layout>
	);
}
