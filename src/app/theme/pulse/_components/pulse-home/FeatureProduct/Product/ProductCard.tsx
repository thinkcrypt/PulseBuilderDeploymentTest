import { Box, BoxProps, TextProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { ProductCardTag, ProductImage, ProductPrice } from './index';
import Link from 'next/link';
import {
	cartBoxShadowHover,
	productCardBoxShadow,
	FlexColumn,
	Heading
} from '../../../../_components/index';

type ProductCardProps = BoxProps & {
	data: any;
	css: any;
	basic: any;
	type?: any;
	item?: any;
};

const ProductCard: FC<ProductCardProps> = ({
	data: item,
	css,
	basic,
	type,
	...props
}) => {
	const discountValue =
		item?.discountType === 'percentage'
			? (item?.price * item?.discount) / 100
			: item?.discountType === 'flat'
			? item?.discount
			: 0;

	return (
		<Container css={css} {...props}>
			<Link href={`/products/${item?.id}`}>
				<ProductImage css={css} src={item?.image} />
				<FlexColumn alignItems='flex-start' py='1rem' px='1rem'>
					<ProductName basic={basic} css={css} mb='4px'>
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
					discountType={item?.discountType}
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
		borderRadius={`${css?.borderRadius}px`}
		boxShadow={css?.boxShadow || productCardBoxShadow}
		bordeRadius='44px'
		bg={css?.cardBg}
		color={css?.cardFg}
		position='relative'
		w='full'
		_hover={{
			boxShadow: cartBoxShadowHover,
		}}
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
}: TextProps & { children: string; css: any; basic: any }) => {
	// const colors = useColors();
	return (
		<Heading
			css={css}
			basic={basic}
			color={css?.titleColor}
			fontSize={{
				base: `${css?.titleFontSizeBASE}px`,
				lg: `${css?.titleFontSizeBG}px`,
			}}
			fontWeight={css?.titleFontWeight}
			// textAlign={css?.cardTitleTextAlign}

			textAlign={css?.align}
			noOfLines={2}
			w='full'
			minH={{ base: '40px', sm: '40px' }}
			_hover={{
				color: css?.priceTextColor,
				textDecoration: 'underline',
			}}
			{...props}
		>
			{children}
		</Heading>
	);
};
