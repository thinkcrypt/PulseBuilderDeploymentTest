import { Box, BoxProps, Grid, } from '@chakra-ui/react';
import React, { FC } from 'react';
import { currency, useAppSelector, useAuth } from '@/components/library';
import { SummaryItemRow } from './index';
import {
	NormalText,
	ShoppingCartAction,
	Heading,
} from '../../../_components/index';

type OrderSummaryProps = BoxProps & {
	basic: any;
	css: any;
	content: any;
	cartItems?: any;
	cartItemsData?: any;
};

const OrderSummary: FC<OrderSummaryProps> = ({
	basic,
	css,
	content,
	cartItems,
	cartItemsData,
}) => {
	const { isLoggedIn } = useAuth();

	return (
		<Box>
			<Heading
				color={css?.bodyFg}
				fontSize='1.2rem'
				fontWeight='700'
				basic={basic}
			>
				Order Summary
			</Heading>
			{cartItems?.map((item: any, i: number) => (
				<SummaryItemRow basic={basic} css={css} item={item} key={i} />
			))}
			<Grid gridTemplateColumns='1fr 1fr' py='8px'>
				<NormalText
					fontWeight='600'
					fontSize='1rem'
					color={css?.bodyFg || '#4A5568'}
					basic={basic}
				>
					Subtotal
				</NormalText>
				<NormalText
					fontWeight='600'
					color={css?.bodyFg || '#4A5568'}
					basic={basic}
					fontSize='1rem'
					textAlign='right'
				>
					{`${currency?.symbol} ${cartItemsData?.subTotal?.toLocaleString()}`}
				</NormalText>
			</Grid>
			<Grid gridTemplateColumns='1fr 1fr' py='8px'>
				<NormalText
					fontWeight='600'
					color={css?.bodyFg || '#3b3b3b'}
					basic={basic}
					fontSize='1.4rem'
				>
					Total
				</NormalText>
				<NormalText
					fontWeight='600'
					color={css?.bodyFg || '#3b3b3b'}
					basic={basic}
					fontSize='1.4rem'
					textAlign='right'
				>
					{`${currency?.symbol} ${cartItemsData?.total?.toLocaleString()}`}
				</NormalText>
			</Grid>
			<ShoppingCartAction basic={basic} css={css} content={content} />
		</Box>
	);
};

export default OrderSummary;
