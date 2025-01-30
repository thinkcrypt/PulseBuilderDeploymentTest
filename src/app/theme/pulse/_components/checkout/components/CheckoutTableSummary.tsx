import { Box, BoxProps, Flex, Radio, RadioGroup } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { SummaryItem } from './index';
import {
	SimpleButton,
	NormalText,
	CouponCode,
} from '../../../_components/index';

type CheckoutTableSummaryProps = BoxProps & {
	subTotal: number;
	total: number;
	vat: number;
	shipping: number;
	discount: number;
	basic: any;
	css: any;
	isBtnDisabled?: boolean;
	addressData: any;
};
const CheckoutTableSummary: FC<CheckoutTableSummaryProps> = ({
	subTotal,
	total,
	vat,
	shipping,
	discount,
	basic,
	css,
	isBtnDisabled,
	addressData,
	...props
}) => {
	const [value, setValue] = useState('cashOnDelivery');

	const [discountCode, setDiscountCode] = useState('');

	const handleDiscountChange = (value: string) => {
		setDiscountCode(value);
	};

	const applyCouponCode = () => {
		// triggerVerifyCoupon({
		// 	storeId: id,
		// 	body: {
		// 		coupon: discountCode,
		// 	},
		// });
	};

	//   const colors = useColors();
	const dark = `1px dashed ${css?.border || '#000'}`;
	return (
		<Box pb='1rem'>
			<Box borderTop={dark} borderBottom={dark} py='1rem' {...props}>
				<SummaryItem basic={basic} css={css} text='Subtotal' value={subTotal} />
				<SummaryItem basic={basic} css={css} text='Vat (+)' value={vat} />
				<SummaryItem
					basic={basic}
					css={css}
					text='Shipping (+)'
					value={shipping}
				/>
				<SummaryItem
					basic={basic}
					css={css}
					text='Discount (-)'
					value={discount}
				/>
				<Box mb={4}>
					<NormalText
						basic={basic}
						css={css}
						fontWeight={css?.summaryWeight || 600}
						fontSize={{
							base: `${css?.summarySizeBase}px`,
							lg: `${css?.summarySizeBg || 16}px`,
						}}
						color={css?.summaryColor}
					>
						Payment Method
					</NormalText>
					<RadioGroup defaultValue='cashOnDelivery'>
						<Flex gap={4}>
							<Radio isDisabled value='card'>
								Card
							</Radio>
							<Radio isDisabled value='bkash'>
								Bkash
							</Radio>
							<Radio value='cashOnDelivery'>Cash On Delivery</Radio>
						</Flex>
					</RadioGroup>
				</Box>
				<CouponCode
					basic={basic}
					css={css}
					value={discountCode}
					applyCoupon={applyCouponCode}
					handleCouponChange={handleDiscountChange}
				/>
			</Box>
			<SummaryItem
				py='1rem'
				basic={basic}
				css={css}
				text='Total'
				value={total}
			/>

			<SimpleButton
				w='full'
				bg={css?.btnPrimaryBg}
				color={css?.btnPrimaryFg}
				_hover={{
					bg: css?.btnPrimaryHoverBg,
					color: css?.btnPrimaryHoverFg,
				}}
				fontSize={`${css?.btnPrimarySize || 14}px`}
				fontWeight={css?.btnPrimaryWeight}
				basic={basic}
				css={css}
				isDisabled={isBtnDisabled}
			>
				Confirm Order
			</SimpleButton>
		</Box>
	);
};

export default CheckoutTableSummary;
