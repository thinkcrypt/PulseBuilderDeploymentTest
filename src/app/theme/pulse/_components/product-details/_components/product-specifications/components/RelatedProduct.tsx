import { Box, BoxProps, Center, Flex, Image } from '@chakra-ui/react';
import { FC } from 'react';
import ProductPrice from './ProductPrice';
import Link from 'next/link';
import {
	useColors,
	tabBoxShadow,
	Heading,
	NormalText,
} from '../../../../../_components/index';

type RelatedProductProps = BoxProps & {
	basic: any;
	css: any;
	relatedProduct: any;
};

const RelatedProduct: FC<RelatedProductProps> = ({
	css,
	basic,
	relatedProduct,
}) => {
	const colors = useColors();
	const border = `1px solid ${css?.borderColor}`;

	return (
		<Box
			my='1rem'
			borderRadius='4px'
			bg={colors?.white}
			px='1rem'
			py='1rem'
			boxShadow={css?.boxShadow || tabBoxShadow}
		>
			<Center
				pb='1rem'
				mb='1rem'
				borderBottom={`1px solid ${css?.borderColor}`}
			>
				<Heading
					fontWeight={css?.headingFontWeight}
					fontSize={`${css?.headingFontSize}px`}
					color={css?.HeadingFg}
					basic={basic}
					textAlign='center'
					css={css}
				>
					Related Products
				</Heading>
			</Center>
			{relatedProduct?.doc?.slice?.(0, 6)?.map((item: any, i: number) => (
				<Link href={`/products/${item?.id}`} key={i}>
					<Flex py='1rem' borderBottom={border}>
						<Box mr='16px'>
							<Flex w='80px' h='80px'>
								<Image
									w='full'
									h='full'
									objectFit='cover'
									src={item?.image}
									borderRadius='4px'
									alt='image'
								/>
							</Flex>
						</Box>
						<Flex flexDir='column'>
							<NormalText noOfLines={2} basic={basic} css={css}>
								{item?.name}
							</NormalText>
							<ProductPrice
								css={css}
								basic={basic}
								product={item}
								discount={item?.discount}
								isDiscount={item?.isDiscount}
							>
								{item?.price}
							</ProductPrice>
						</Flex>
					</Flex>
				</Link>
			))}
		</Box>
	);
};

export default RelatedProduct;
