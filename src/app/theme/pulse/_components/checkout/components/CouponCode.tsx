import { Box, BoxProps, Grid, GridItem, Input } from '@chakra-ui/react';
import { FC } from 'react';
import { SimpleButton, useColors } from '../../../_components/index';

type DiscountCodeProps = BoxProps & {
	value: string;
	loading?: boolean;
	handleCouponChange: (value: string) => void;
	applyCoupon: () => void;
	basic: any;
	css: any;
};

const DiscountCode: FC<DiscountCodeProps> = ({
	value,
	loading,
	handleCouponChange,
	applyCoupon,
	basic,
	css,
	...props
}) => {
	const colors = useColors();
	return (
		<Box {...props}>
			<Grid templateColumns='repeat(5, 1fr)' gap={2}>
				<GridItem colSpan={{ base: 3, sm: 4, xl: 4 }}>
					<Input
						onChange={e => handleCouponChange(e.target.value)}
						type='text'
						borderColor={colors?.brand}
						placeholder='Apply Coupon Code'
						size='sm'
						value={value}
					/>
				</GridItem>
				<GridItem colSpan={{ base: 2, sm: 1, xl: 1 }}>
					<SimpleButton
						basic={basic}
						css={css}
						isLoading={loading}
						onClick={applyCoupon}
						w='full'
						bg={css?.btnSecondaryBg}
						color={css?.btnSecondaryFg}
						_hover={{
							bg: css?.btnSecondaryHoverBg,
							color: css?.btnSecondaryHoverFg,
						}}
						size='sm'
						fontSize={`${css?.btnSecondarySize || 14}px`}
						fontWeight={css?.btnSecondaryWeight}
					>
						Apply
					</SimpleButton>
				</GridItem>
			</Grid>
		</Box>
	);
};

export default DiscountCode;
