import React, { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import PriceItem from '../PriceItem';
import { Price } from '@/components/library';
import { OPDContainer as Container, OPDBottomContainer as BottomContainer, OPDProps } from './';

const OrderPriceDetails: FC<OPDProps> = ({ total, subTotal, discount, shipping, vat }) => {
	return (
		<Container>
			<React.Fragment>
				<PriceItem title='Sub Total'>{subTotal}</PriceItem>
				<PriceItem title='VAT (+)'>{vat}</PriceItem>
				<PriceItem title='Shipping (+)'>{shipping}</PriceItem>
				<PriceItem title='Discount (-)'>{discount}</PriceItem>
			</React.Fragment>

			<BottomContainer>
				<Heading size='md'>Net Payable</Heading>
				<Heading
					size='md'
					textAlign='right'>
					<Price>{total}</Price>
				</Heading>
			</BottomContainer>
		</Container>
	);
};

export default OrderPriceDetails;
