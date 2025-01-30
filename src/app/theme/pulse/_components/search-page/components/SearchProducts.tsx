// import { useGetAllQuery } from '@/store/services/commonApi';
import { useGetAllQuery } from '@/components/library';
import { Box, BoxProps, Grid } from '@chakra-ui/react';
import React, { FC } from 'react';
import { ProductCard } from '../../../_components/index';

const TEMPLATE_COLUMNS = {
	base: 'repeat(2, 1fr)',
	sm: 'repeat(3, 1fr)',
	md: 'repeat(4, 1fr)',
	xl: 'repeat(5, 1fr)',
	'2xl': 'repeat(5, 1fr)',
};

type SearchProductsProps = BoxProps & {
	basic: any;
	content: any;
	searchValue: any;
};

const SearchProducts: FC<SearchProductsProps> = ({
	basic,
	content,
	searchValue,
	...props
}) => {
	const { data } = useGetAllQuery({
		path: 'products',
		limit: 8,
		search: searchValue || '',
	});

	if (!data) return null;

	const css = content?.homeProductCss;

	return (
		<Box py='2rem' {...props}>
			<Grid gridTemplateColumns={TEMPLATE_COLUMNS} gap={4}>
				{data?.doc?.length > 0 ? (
					data.doc.map((item: any, i: number) => (
						<ProductCard
							type={item?.type}
							id={item?.id}
							basic={basic}
							key={i}
							data={item}
							css={css}
						/>
					))
				) : (
					<Box textAlign='left' fontSize='lg' fontWeight='bold'>
						No products found!
					</Box>
				)}
			</Grid>
		</Box>
	);
};

export default SearchProducts;
