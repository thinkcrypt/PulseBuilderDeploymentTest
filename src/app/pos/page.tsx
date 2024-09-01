'use client';

import React from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react';

import PosFilters from '@/components/pos/PosFilters';
import PosSearch from '@/components/pos/PosSearch';
import PosCart from '@/components/pos/PosCart';
import PorductListPos from '@/components/pos/PorductListPos';

import { sizes, PosLayout as Layout, Column, SideDrawer } from '@/components/library';

const page = () => {
	return (
		<>
			<Layout
				path='pos'
				title='POS'>
				<Grid gridTemplateColumns={sizes.POS_RATIO}>
					<Column>
						<Flex
							px={4}
							justify='space-between'
							gap={2}
							align='center'>
							<SideDrawer />
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
					</Column>
					<GridItem>
						<PosCart />
					</GridItem>
				</Grid>
			</Layout>
		</>
	);
};

export default page;
