'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { schema } from '../../../../models';
import { Column, Layout, ViewById, TableObjectProps } from '../../../../components/library';
import { Heading } from '@chakra-ui/react';

import { viewAllDataFields } from '../../../../models/order';
import TableCustom from '../../../../components/library/sections/table/TableCustom';

const viewAll = (id: string): TableObjectProps => {
	return {
		title: 'Customer Orders',
		path: 'orders',
		// clickable: true,
		//toPath: '/items/edit',
		export: false,
		search: false,
		hidePreferences: true,
		filters: false,
		limit: 5,
		pagination: false,
		topPagination: true,
		preferences: ['customer.name', 'totalItems', 'status', 'total', 'dueAmount', 'createdAt'],
		preFilters: {
			customer: id,
		},

		// select: {
		// 	show: true,
		// 	menu: multiSelectMenu,
		// },
		// button: {
		// 	title: 'Add Product',
		// 	path: '/products/create',
		// },
		// menu: itemMenu,
		// clickable: true,

		data: viewAllDataFields,
		showMenu: false,
	};
};

const OrderTable = ({ id }: { id: string }) => {
	return <TableCustom table={viewAll(id)} />;
};

const ViewPage = () => {
	const { id }: { id: string } = useParams();

	return (
		<Layout
			title='Customer'
			path='customers'>
			<Column gap={6}>
				<Heading size='md'>Basic Info</Heading>
				<ViewById
					schema={schema['customers']}
					path='customers'
					id={id}
				/>
			</Column>
			<Column
				gap={2}
				py={6}
				pb={2}>
				<Heading size='md'>Customer Orders</Heading>
				{id && <OrderTable id={id} />}
			</Column>
		</Layout>
	);
};

export default ViewPage;
