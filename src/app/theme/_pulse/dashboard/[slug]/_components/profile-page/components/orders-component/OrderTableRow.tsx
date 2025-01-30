'use client';

import { Heading, Flex, FlexProps } from '@chakra-ui/react';
import { format } from 'date-fns';
import React, { FC } from 'react';

import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from '@chakra-ui/react';
import { currency } from '@/components/library';

type OrderTableRowProps = FlexProps & {
	basic: any;
	css: any;
	customer: any;
	deliveryStatus: any;
	date: any;
	totalItems: any;
	vat: any;
	subTotal: any;
	totalPrice: any;
	dueAmount: any;
	isFetching: boolean;
};

const OrderTableRow: FC<OrderTableRowProps> = ({
	basic,
	css,
	customer,
	deliveryStatus,
	date,
	totalItems,
	vat,
	subTotal,
	totalPrice,
	dueAmount,
	isFetching,
}) => {
	const formattedDate = format(new Date(date), 'dd/MM/yyyy');
	const formattedTime = format(new Date(date), 'h:mm:ss a');

	// const getStatusColor = (status: string) => {
	// 	switch (status) {
	// 		case 'pending':
	// 			return 'blue.500';
	// 		case 'completed':
	// 			return 'green.500';
	// 		case 'cancelled':
	// 			return 'red.500';
	// 		case 'order-placed':
	// 			return 'purple.500';
	// 		default:
	// 			return 'gray.500';
	// 	}
	// };

	return (
		<Tr
			borderBottom={`1px solid ${css?.tableBorder || '#fff'}`}
			margin='0px'
			padding='0px'
		>
			<Td>{customer}</Td>
			<Td>{deliveryStatus}</Td>
			<Td>{`${formattedDate}, ${formattedTime}`}</Td>
			<Td>{totalItems}</Td>
			<Td>{`${currency?.symbol} ${vat.toLocaleString()}`}</Td>
			<Td>{`${currency?.symbol} ${subTotal.toLocaleString()}`}</Td>
			<Td>{`${currency?.symbol} ${totalPrice.toLocaleString()}`}</Td>
			<Td>{`${currency?.symbol} ${dueAmount.toLocaleString()}`}</Td>
		</Tr>
	);
};

export default OrderTableRow;
