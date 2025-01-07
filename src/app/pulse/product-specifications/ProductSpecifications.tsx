import { Box, Grid, GridItem, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { HoverContentContainer, useGetAllQuery } from '@/components/library';
import SectionPadding from '@/components/common/SectionPadding';
import {
	CustomSection,
	DescriptionCard,
	ProductTabs,
	QuestionCard,
	SpecificationCard,
} from './_components/index';
import useColors from '@/components/library/hooks/useColors';
import { productData } from '../product-details/_components/productData';
import RelatedProduct from './_components/RelatedProduct';

const TEMPLATE_COLUMN = {
	base: 'repeat(2, 1fr)',
	md: 'repeat(3, 1fr)',
	lg: 'repeat(4, 1fr)',
	xl: 'repeat(6, 1fr)',
};

type ProductSpecificationsProps = {
	images: string[];
	height: number;
	hide: boolean;
};
export const PADDING_X = { base: 6, md: 24 };
const ProductSpecifications: FC<any> = ({
	data,
	dataModel,
	content,
	path,
	basic,
}) => {
	// const { data: relatedProduct, isLoading: relatedProductLoading } =
	// useGetProductDataQuery({});
	const { type, id } = content?.productList?.map((item: any) => item);
	const {
		data: relatedProduct,
		isError,
		isFetching,
	} = useGetAllQuery({
		path: 'products',
		filters: {
			...(type == 'category' && { category_in: id }),
			...(type == 'collection' && { collection_in: id }),
			limit: 10,
			sort: 'priority',
		},
	});
	// console.log('see produts:', relatedProduct);
	const colors = useColors();
	const banner = content?.banner;

	const css = content?.productPage;
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
			px={PADDING_X}
			position='sticky'
			top='0'
		>
			<Grid gridTemplateColumns={TEMPLATE_COLUMN} gap={4} py={'1rem'}>
				<GridItem colSpan={4}>
					<ProductTabs
						basic={basic}
						css={css}
						productData={productData}
						mb='1rem'
					/>

					<SpecificationCard
						basic={basic}
						css={css}
						productData={productData}
						mb='1rem'
					/>

					<DescriptionCard
						basic={basic}
						css={css}
						productData={productData}
						mb='1rem'
					/>

					{productData?.customSections?.map((item: any, i: number) => (
						<CustomSection
							key={i}
							basic={basic}
							css={css}
							title={item?.title}
							description={item?.description}
							mb='1rem'
						/>
					))}

					<QuestionCard
						basic={basic}
						css={css}
						productData={productData}
						mb='1rem'
					/>
				</GridItem>
				{/* <GridItem colSpan={2}>Related Products</GridItem> */}
				<GridItem colSpan={2}>
					<RelatedProduct
						css={css}
						basic={basic}
						relatedProduct={relatedProduct}
					/>
				</GridItem>
			</Grid>
		</HoverContentContainer>
	);
};

export default ProductSpecifications;
