'use client';

import { Heading, Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import { OrderTableRow } from './index';
import NormalText from '../../../../../../_core-components/components/text/NormalText';
import { OrderTableRowSkeleton } from '../../../../../../_core-components/components/pulse-skeleton';
// import { OrderTableRowSkeleton } from '@/components/library/components/pulse-skeleton';
// import NormalText from '@/components/text/NormalText';

type OrderListProps = FlexProps & {
	basic: any;
	css: any;
	orderData: any;
	isFetching: boolean;
};

const OrderList: FC<OrderListProps> = ({
	basic,
	css,
	orderData,
	isFetching,
}) => {
	return (
		<TableContainer
			bg={css?.tableBg || '#EEF0F7'}
			borderRadius={`${css?.tableRadius || 8}px`}
		>
			<Table fontFamily={basic?.primaryFont} size='md' variant={'unstyled'}>
				<Thead>
					<Tr borderBottom={`1px solid ${css?.tableBorder || '#fff'}`}>
						<Th>Customer</Th>
						<Th>Delivery Status</Th>
						<Th>Order Date</Th>
						<Th>Total Items</Th>
						<Th>Vat</Th>
						<Th>Sub Total</Th>
						<Th>Total Price</Th>
						<Th>Due Amount</Th>
					</Tr>
				</Thead>
				<Tbody>
					{isFetching &&
						[1, 2, 3, 4, 5].map((item: number) => (
							<OrderTableRowSkeleton key={item} />
						))}

					{orderData?.doc?.length > 0 ? (
						orderData.doc.map((order: any, i: number) => (
							<OrderTableRow
								key={i}
								basic={basic}
								css={css}
								customer={order?.customer?.name}
								date={order?.orderDate}
								deliveryStatus={order?.status}
								dueAmount={order?.dueAmount}
								subTotal={order?.subTotal}
								totalItems={order?.totalItems}
								totalPrice={order?.total}
								vat={order?.vat}
								isFetching={isFetching}
							/>
						))
					) : (
						<NormalText px='1.5rem' py='1rem' basic={basic}>
							No orders found!
						</NormalText>
					)}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default OrderList;
