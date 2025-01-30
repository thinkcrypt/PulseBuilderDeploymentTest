'use client';

import { GridItem, GridItemProps } from '@chakra-ui/react';
import { FC } from 'react';
import {
	CheckoutTableHeader,
	CheckoutTableRow,
	CheckoutTableSummary,
} from './index';
import { NormalText } from '../../../_components/index';

type OrderSummaryProps = GridItemProps & {
	basic: any;
	css: any;
	isBtnDisabled?: boolean;
	addressData: any;
};

const cartItemsData = {
	cartItems: [
		{
			id: '6752bf5a68cf70eeb250b3ec',
			image:
				'https://images.pexels.com/photos/1192332/pexels-photo-1192332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			name: 'ThunderCruise 500X',
			price: 450000,
			vat: 0,
			qty: 1,
		},
		{
			id: '6752bfe868cf70eeb250b43c',
			image:
				'https://images.pexels.com/photos/2629412/pexels-photo-2629412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			name: 'NightGlider 650',
			price: 949000,
			vat: 0,
			qty: 1,
		},
		{
			id: '6752c03068cf70eeb250b46b',
			image:
				'https://images.pexels.com/photos/10396353/pexels-photo-10396353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			name: 'AOC AGON PRO PD34 PORSCHE DESIGN 34" 240Hz 0.3ms WQHD QD-OLED Gaming Curved',
			price: 800000,
			vat: 0,
			qty: 1,
		},
	],
	totalItems: 0,
	subTotal: 2199000,
	total: 2199000,
	tax: 0,
	isLoading: false,
	vat: 0,
	shipping: 0,
	discount: 0,
	user: 'guest',
	address: {},
	isAddressSet: false,
};

const OrderSummary: FC<OrderSummaryProps> = ({
	basic,
	css,
	isBtnDisabled,
	addressData,
	...props
}) => {
	// const { cartItems, shipping, subTotal, discount, vat, total } =
	// 	useAppSelector(state => state.cart);

	return (
		<GridItem {...props}>
			<NormalText
				basic={basic}
				fontWeight={css?.cardTitleWeight || 600}
				fontSize={{
					base: `${css?.cartTitleSizeBase}px`,
					lg: `${css?.cartTitleSizeBg || 20}px`,
				}}
				color={css?.cardFg}
			>
				Order Summary
			</NormalText>
			<CheckoutTableHeader basic={basic} css={css} />
			{cartItemsData?.cartItems?.map((item: any, i: number) => (
				<CheckoutTableRow
					key={i}
					name={item?.name}
					qty={item?.qty}
					totalPrice={item?.price * item?.qty}
					unitPrice={item?.price}
					image={item?.image}
					basic={basic}
					css={css}
				/>
			))}

			<CheckoutTableSummary
				basic={basic}
				css={css}
				shipping={cartItemsData?.shipping}
				discount={cartItemsData?.discount}
				subTotal={cartItemsData?.subTotal}
				vat={cartItemsData?.vat}
				total={cartItemsData?.total}
				isBtnDisabled={isBtnDisabled}
				addressData={addressData}
			/>
		</GridItem>
	);
};

export default OrderSummary;
