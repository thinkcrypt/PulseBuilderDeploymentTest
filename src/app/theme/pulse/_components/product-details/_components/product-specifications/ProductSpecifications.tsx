import { Box, Grid, GridItem, GridProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { HoverContentContainer, useGetAllQuery } from '@/components/library';
// import SectionPadding from '@/components/common/SectionPadding';
import {
	CustomSection,
	DescriptionCard,
	ProductTabs,
	QuestionCard,
	SpecificationCard,
} from './components/index';
import { productData } from '../../../../_components/index';
import RelatedProduct from './components/RelatedProduct';
import useColors from '../../../hooks/useColors';
import { useAppSelector } from '@/hooks';

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
	const { display } = useAppSelector(state => state.builder);
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
			px={{
				base: PADDING_X.base,
				md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
			}}
			position='sticky'
			top='0'
		>
			<Grid
				gridTemplateColumns={{
					base: '1fr 1fr',
					md: '1fr 1fr 1fr',
					lg: '1fr 1fr 1fr 1fr',
					xl: display == 'sm' ? '1fr 1fr' : '1fr 1fr 1fr 1fr 1fr 1fr',
				}}
				gap={4}
				py={'1rem'}
			>
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
				<GridItem colSpan={{ base: 4, md: display == 'sm' ? 4 : 2 }}>
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
