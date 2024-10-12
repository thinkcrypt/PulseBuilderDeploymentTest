import React from 'react';
import { convertToTableFields, TableObjectProps, Column, SpaceBetween } from '@/components/library';
import TableCustom from '@/components/library/sections/table/TableCustom';
import { adjustmentSchema } from '@/models/payment/payment.model';
import { Heading } from '@chakra-ui/react';

const fields = ['invoice', 'amount', 'date', 'trnxId', 'reference', 'paymentMethod'];
const viewFileds = convertToTableFields({
	schema: adjustmentSchema,
	fields,
});

const OrderPayments = ({ invoice }: { invoice: string }) => {
	const viewAll: TableObjectProps = {
		title: 'Order Payments',
		path: 'payments',
		export: false,
		search: false,
		hidePreferences: true,
		filters: false,
		pagination: false,
		preferences: fields,
		data: viewFileds,
		showMenu: false,
		topPagination: true,
		preFilters: {
			invoice,
		},
	};

	return (
		<Column gap={2}>
			<SpaceBetween align='center'>
				<Heading size='md'>Payments for Invoice #{invoice}</Heading>
			</SpaceBetween>
			<TableCustom table={viewAll} />
		</Column>
	);
};

export default OrderPayments;
