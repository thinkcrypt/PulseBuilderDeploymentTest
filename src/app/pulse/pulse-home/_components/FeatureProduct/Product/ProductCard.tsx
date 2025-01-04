import { Box, BoxProps, TextProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import {
	cartBoxShadowHover,
	productCardBoxShadow,
} from '@/components/library/config/lib/constants/constants';
// import { FlexColumn, Heading } from '@/components';
import { ProductCardTag, ProductImage, ProductPrice } from './index';
import Link from 'next/link';
import { FlexColumn } from '@/components/common';
import { Heading } from '../../text';
import useColors from '@/components/library/hooks/useColors';

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
		// bg={css?.cardBg}
		borderRadius={`${css?.borderRadius}px`}
		boxShadow={css?.boxShadow || productCardBoxShadow}
		bordeRadius='44px'
		bg='#fff'
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
	const colors = useColors();
	return (
		<Heading
			css={css}
			basic={basic}
			color={css?.cardFg}
			// fontSize={`${css?.cardTitleSize}px`}
			// fontWeight={css?.cardTitleWeight}
			// textAlign={css?.cardTitleTextAlign}
			fontSize='14px'
			fontWeight='400'
			textAlign='left'
			noOfLines={2}
			w='full'
			minH='46px'
			_hover={{
				color: colors?.hoverColor,
				textDecoration: 'underline',
			}}
			{...props}
		>
			{children}
		</Heading>
	);
};
