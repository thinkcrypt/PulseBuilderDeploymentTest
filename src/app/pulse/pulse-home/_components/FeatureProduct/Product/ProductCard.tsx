import {
	Box,
	BoxProps,
	Button,
	ButtonProps,
	TextProps,
} from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
// import { cartBoxShadow, productCardBoxShadow } from '@/lib/config/constants';
// import { FlexColumn, Heading } from '@/components';
import { ProductCardTag, ProductImage, ProductPrice } from './index';
import Heading from '../Heading';
import Link from 'next/link';
import { FlexColumn } from '@/components/common';
export const cartBoxShadow = '0px 0px 8px -4px rgb(0, 0, 0)';
export const productCardBoxShadow = '0px 0px 6px -3px rgb(0, 0, 0, .5)';
type ProductCardProps = BoxProps & {
	data: any;
	css: any;
	basic: any;
};

const ProductCard: FC<ProductCardProps> = ({
	data: item,
	css,
	basic,
	...props
}) => {
	const discountValue =
		item?.discountType === 'percentage'
			? (item?.price * item?.discount) / 100
			: 0;
// console.log('styess css:', css);
// console.log('styess basic:', basic);
	return (
		<Container css={css} {...props}>
			<Link href={`/products/${item?.id}`}>
				<ProductImage src={item?.image} />
				<FlexColumn alignItems='center' py='1rem' px='1rem'>
					<ProductName basic={basic} css={css}>
						{item?.name}
					</ProductName>
					<ProductPrice
						css={css}
						basic={basic}
						discountValue={discountValue}
						discount={item?.discount}
						isDiscount={item?.isDiscount}
					>
						{item?.price}
					</ProductPrice>
				</FlexColumn>
			</Link>
			{/* <CardButton css={css}>{css?.btnText}</CardButton> */}
			{item?.isDiscount && (
				<ProductCardTag
					css={css}
					basic={basic}
					discountValue={discountValue}
					percent={item?.discount}
				/>
			)}
		</Container>
	);
};
export default ProductCard;

const Container = ({
	children,
	css,
	...props
}: BoxProps & { children: ReactNode; css: any }) => (
	<Box
		boxShadow={css?.boxShadow || productCardBoxShadow}
		bg={css?.cardBg}
		borderRadius={`${css?.borderRadius}px`}
		position='relative'
		{...props}
	>
		{children}
	</Box>
);

const ProductName = ({
	children,
	css,
	basic,
	...props
}: TextProps & { children: string; css: any; basic: any }) => (
	<Heading
		css={css}
		basic={basic}
		color={css?.cardFg}
		fontSize={`${css?.cardTitleSize}px`}
		fontWeight={css?.cardTitleWeight}
		textAlign={css?.cardTitleTextAlign}
		noOfLines={2}
		minH='40px'
		{...props}
	>
		{children}
	</Heading>
);

// const CardButton = ({
// 	children,
// 	css,
// 	...props
// }: ButtonProps & { children: string; css: any }) => (
// 	<Button
// 		w='full'
// 		fontWeight={css?.btnFontWeight}
// 		fontSize={css?.btnFontSize}
// 		bg={css?.btnBg}
// 		color={css?.btnFg}
// 		borderRadius={css?.btnRadius}
// 		transition='.3s'
// 		marginBottom='auto'
// 		_hover={{ bg: css?.btnHoverBg, color: css?.btnHoverFg }}
// 		{...props}
// 	>
// 		{css?.btnText}
// 	</Button>
// );
