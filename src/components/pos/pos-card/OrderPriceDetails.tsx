import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { useAppSelector } from '@/hooks';
import { currency } from '@/lib/constants';
import PriceItem from './PriceItem';
import Column from '../../containers/Column';

const OrderPriceDetails = ({
	total,
	subTotal,
	discount,
	shipping,
	vat,
}: {
	total: number;
	subTotal: number;
	discount: number;
	shipping: number;
	vat: number;
}) => {
	return (
		<Column
			w='full'
			py={2}
			borderTop='1px solid'
			borderTopColor='stroke.deepL'
			_dark={{ borderTopColor: 'stroke.deepD' }}>
			<PriceItem title='Subtotal'>{subTotal}</PriceItem>
			<PriceItem title='Discount (-)'>{discount}</PriceItem>
			<PriceItem title='VAT (+)'>{vat}</PriceItem>
			<PriceItem title='Shipping (+)'>{shipping}</PriceItem>

			<Flex align='center' w='full' pt={2}>
				<Flex justify='space-between' gap={2} w='full'>
					<Heading size='md'>Grand Total</Heading>
					<Heading size='md' textAlign='right'>
						{currency.symbol} {total?.toLocaleString() || 0}
					</Heading>
				</Flex>
			</Flex>
		</Column>
	);
};

export default OrderPriceDetails;
