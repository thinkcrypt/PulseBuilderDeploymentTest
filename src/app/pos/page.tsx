import React from 'react';
import { PosLayout as Layout, Column } from '@/components/library';
import { Grid, Flex } from '@chakra-ui/react';
import PosFilters from '@/components/pos/PosFilters';
import PosSearch from '@/components/pos/PosSearch';
import PosCart from '@/components/pos/PosCart';
import PorductListPos from '@/components/pos/PorductListPos';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'MINT',
	description: 'MINT',
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
		userScalable: false,
	},
};

const page = () => {
	return (
		<>
			{/* <SideDrawer />; */}
			<Layout
				path='/pos'
				title='POS'>
				<Grid
					gridTemplateColumns={{
						base: '1fr',
						md: '8fr 2fr',
					}}
					maxH='100vh'
					overflow='none'>
					<Flex
						overflow='hidden'
						flexDir='column'
						gap={{ base: 3, md: 1 }}>
						<Flex
							overflowX='scroll'
							flexDir={{ base: 'column', md: 'row' }}
							px={4}
							justify='space-between'
							gap={2}
							align='center'>
							<PosSearch />

							<PosFilters
								path='categories'
								filter='category'
							/>
							<PosFilters
								path='brands'
								filter='brand'
							/>
						</Flex>
						<PorductListPos />
					</Flex>

					<PosCart />
				</Grid>
			</Layout>
		</>
	);
};

export default page;
