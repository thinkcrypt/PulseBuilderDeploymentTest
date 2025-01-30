import React, { FC, ReactNode, useState } from 'react';
import { Box, Flex, Grid, GridItem, GridProps, useToast } from '@chakra-ui/react';
import { AddToCart, ProductImage, ProductBadge, Quantity, ProductPrice } from './_components/index';
import { addToCart } from '@/components/library/store/slices/cartSlice';
import { HoverContentContainer } from '@/components/library';
import { productData } from './_components/productData';
import { useAppDispatch } from '@/hooks';
import { Heading } from '../_components/text';
import { SocialShare } from './_components/social-share';
import useColors from '../_core-components/hooks/useColors';
import { BreadCrumbPulse } from '../_core-components/components/breadcrumb';
import NormalText from '../_core-components/components/text/NormalText';
export const padding = {
	PADDING_X_2XL: '18rem',
	PADDING_X_LG: '12rem',
	PADDING_X_MOBILE: '1rem',
};

type ProductDetailsProps = GridProps & {
	basic: any;
	content: any;
	id: string;
	productData: any;
	isLoading: boolean;
};
export const PADDING_X = { base: 6, md: 24 };
const ProductDetailsPage: FC<any> = ({ data, dataModel, content, path, basic }) => {
	const banner = content?.banner;
	const colors = useColors();
	const [quantity, setQuantity] = useState(1);
	const dispatch = useAppDispatch();
	const toast = useToast();

	// for handling quantity
	const handleQuantity = (type: string) => {
		if (type == 'increment') {
			setQuantity(quantity + 1);
			return;
		}
		if (type == 'decrement') {
			if (quantity <= 1) {
				return;
			} else {
				setQuantity(quantity - 1);
				return;
			}
		}
	};

	const handleAddToCart = () => {
		dispatch(
			addToCart({
				item: {
					_id: productData?._id,
					name: productData?.name,
					price: productData?.price,
					vat: 0,
					image: productData?.image,
				},
				qty: quantity,
			})
		);
		setQuantity(1);
		toast({
			title: `${quantity} ${productData?.name} added to bag`,
			status: 'success',
			duration: 2000,
			isClosable: true,
			variant: 'subtle',
		});
	};

	const css = content?.productPage;
	const breadCrumbCss = data?.content?.breadCrumbCss;
	// console.log('breadCrumbCss:', breadCrumbCss);
	// const doc: ProductDetailsPageProps = content?.hero;
	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			bg={basic?.bgColor}
			dataModel={dataModel}
			// bg={banner?.bgColor}
			borderBottom={`1px solid ${banner?.borderColor}`}
			//px={PADDING_X}
			position='sticky'
			top='0'>
			<Box
				bg={breadCrumbCss?.bgColor || '#ffffff'}
				py='1rem'
				px={PADDING_X}>
				<BreadCrumbPulse
					basic={data?.basic}
					css={breadCrumbCss}
					// data={content}
					productName={productData?.name}
				/>
			</Box>
			<Box>
				<SocialShare
					productData={productData}
					basic={data?.basic}
					content={data?.content}
					productId={data?._id}
					px={PADDING_X}
				/>
			</Box>
			<Grid
				pb='1rem'
				px={PADDING_X}
				gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
				gap={12}
				bg={colors?.white}>
				<Flex>
					<ProductImage src={productData?.image} />
				</Flex>
				<Box>
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
		</HoverContentContainer>
	);
};

export default ProductDetailsPage;
