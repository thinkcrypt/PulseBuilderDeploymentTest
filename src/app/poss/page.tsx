'use client';

import React from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react';

import PosFilters from '@/components/library/pos/PosFilters';
import PosSearch from '@/components/library/pos/PosSearch';
import PosCart from '@/components/library/pos/PosCart';
import PorductListPos from '@/components/library/pos/PorductListPos';

import { sizes, PosLayout as Layout, Column, SideDrawer } from '@/components/library';
import { NextPage } from 'next';

const PosPage: NextPage = () => {
	return (
		<>
			<SideDrawer />
			<Layout
				path='pos'
				title='POS'>
				<Grid gridTemplateColumns={'8fr 2fr'}>
					<Column>
						<Flex
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
					</Column>
					<GridItem>
						<PosCart />
					</GridItem>
				</Grid>
			</Layout>
		</>
	);
};

export default PosPage;
