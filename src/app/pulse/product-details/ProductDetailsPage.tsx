import React, { FC, ReactNode, useState } from 'react';
import {
	Box,
	Flex,
	Grid,
	GridItem,
	GridProps,
	useToast,
} from '@chakra-ui/react';
import {
	AddToCart,
	ProductImage,
	ProductBadge,
	Quantity,
	ProductPrice,
} from './_components/index';
import { addToCart } from '@/components/library/store/slices/cartSlice';
import { HomeContentProps, HoverContentContainer } from '@/components/library';
import { productData } from './_components/productData';
import useColors from '@/components/library/hooks/useColors';
import { useAppDispatch } from '@/hooks';
import { Heading } from '../pulse-home/_components/text';
import NormalText from '@/components/text/NormalText';
import TextButton from '../pulse-home/_components/button/TextButton';
import { SocialShare } from './_components/social-share';
import { sectionPadding } from '@/components/library/config/lib/constants/constants';
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
const ProductDetailsPage: FC<any> = ({
	data,
	dataModel,
	content,
	path,
	basic,
}) => {
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
			//position="sticky"
			// top="0"
		>
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
				pb='60px'
				px={PADDING_X}
				gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
				gap={12}
				// bg={colors?.white}
				bg={css?.tabBg || colors?.white}
			>
				<Flex>
					<ProductImage src={productData?.image} />
				</Flex>
				<Box>
					<Heading
						basic={basic}
						fontSize={css?.headingFontSize}
						color={css?.titleColor}
						fontWeight={css?.headingFontWeight}
						mb='1rem'
					>
						{productData?.name}
					</Heading>

					<ProductBadge
						mb='1rem'
						productData={productData}
						basic={basic}
						css={css}
						content={content}
					/>
					<ProductPrice css={css} basic={basic} productData={productData} />

					<NormalText color={css?.textPrimary} mb='1rem' basic={basic}>
						{productData?.shortDescription}
					</NormalText>

					<Grid templateColumns='repeat(6, 1fr)' gap={2} my='1rem'>
						<GridItem colSpan={{ base: 2, md: 1 }} w='auto' h='2.5rem'>
							<Quantity
								quantity={quantity}
								handleQuantity={handleQuantity}
								basic={basic}
								css={css}
							/>
						</GridItem>
						<GridItem colSpan={{ base: 4, md: 5 }} w='auto' h='2.5rem'>
							<AddToCart addToCart={handleAddToCart} css={css} basic={basic} />
						</GridItem>
					</Grid>
					<TextButton mb='2rem' basic={basic}>
						View More Info
					</TextButton>
				</Box>
			</Grid>
		</HoverContentContainer>
	);
};

export default ProductDetailsPage;
