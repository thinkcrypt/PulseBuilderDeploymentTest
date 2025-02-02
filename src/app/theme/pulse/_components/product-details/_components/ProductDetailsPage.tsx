import React, { FC, ReactNode, useState } from 'react';
import { Box, Flex, Grid, GridItem, GridProps, Text, useToast } from '@chakra-ui/react';

import { BreadCrumbPulse } from '../../components/breadcrumb';
export const padding = {
	PADDING_X_2XL: '18rem',
	PADDING_X_LG: '12rem',
	PADDING_X_MOBILE: '1rem',
};

import {
	Heading,
	NormalText,
	ProductBadge,
	productData,
	ProductImage,
	SocialShare,
	useColors,
} from '../../../_components/index';

import { generateTextModel, HoverContentContainer } from '@/components/library';
import { AddToCart, Quantity } from './index';
import ProductPrice from './ProductPrice';
import { useAppSelector } from '@/hooks';

const headingModel = [...generateTextModel('productPage.titleCss', 'Title Style')];

export const PADDING_X = { base: 6, md: 24 };
const ProductDetailsPage: FC<any> = ({ data, dataModel, content, path, basic }) => {
	const { display } = useAppSelector(state => state.builder);
	const colors = useColors();
	const [quantity, setQuantity] = useState(1);

	// for handling quantity
	const handleQuantity = (type: string) => {};

	const handleAddToCart = () => {};

	const productName = display === 'sm' ? `${productData?.name.slice(0, 15)}...` : productData?.name;
	const css = content?.productPage;
	const breadCrumbCss = data?.basic?.breadCrumbCss;
	return (
		<HoverContentContainer
			section={true}
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			bg={basic?.bgColor}
			dataModel={dataModel}>
			<Box
				py='2rem'
				bg={breadCrumbCss?.bgColor || '#ffffff'}
				px={{
					base: PADDING_X.base,
					md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
				}}>
				<BreadCrumbPulse
					basic={data?.basic}
					css={breadCrumbCss}
					productName={productName}
				/>

				<SocialShare
					productData={productData}
					basic={data?.basic}
					content={data?.content}
					productId={data?._id}
				/>

				<Grid
					pt='2rem'
					gridTemplateColumns={{
						base: '1fr',
						lg: display === 'sm' ? '1fr' : '1fr 1fr',
					}}
					gap={12}
					bg={colors?.white}>
					<Flex>
						<ProductImage
							src={productData?.image}
							css={css}
						/>
					</Flex>

					<Box>
						<HoverContentContainer
							component={true}
							type='content'
							path={path}
							title='Text'
							data={content}
							dataModel={headingModel}>
							<Text
								{...css?.titleCss}
								fontSize={{
									base: `${css?.titleFontSizeBase}px`,
									md:
										display === 'sm' ? `${css?.titleFontSizeBase}px` : `${css?.titleFontSizeBg}px`,
								}}>
								{productData?.name}
							</Text>
						</HoverContentContainer>

						<Heading
							basic={basic}
							fontSize={{
								base: `${css?.titleFontSizeBase}px`,
								lg: css?.titleFontSizeBg,
							}}
							color={css?.titleColor}
							fontWeight={css?.titleFontWeight}
							mb='1rem'>
							{productData?.name}
						</Heading>

						<ProductBadge
							mb='1rem'
							productData={productData}
							basic={basic}
							css={css}
							content={content}
						/>
						<ProductPrice
							css={css}
							basic={basic}
							productData={productData}
						/>

						<NormalText
							color={css?.textPrimary}
							mb='1rem'
							basic={basic}>
							{productData?.shortDescription}
						</NormalText>

						{!productData?.shortDescription && (
							<NormalText
								noOfLines={8}
								color={css?.textPrimary}
								mb='1rem'
								basic={basic}
								whiteSpace='pre-line'>
								{productData?.description}
							</NormalText>
						)}

						<Flex
							pt='2rem'
							pb='1rem'>
							<Quantity
								quantity={quantity}
								handleQuantity={handleQuantity}
								basic={basic}
								css={css}
								mr='16px'
							/>
							<Box
								w='auto'
								h='2.5rem'>
								<AddToCart
									addToCart={handleAddToCart}
									css={css}
									basic={basic}
								/>
							</Box>
						</Flex>
					</Box>
				</Grid>
			</Box>
		</HoverContentContainer>
	);
};

export default ProductDetailsPage;
