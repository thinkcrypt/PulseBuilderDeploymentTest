'use client';
import { Box, BoxProps, TextProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import SearchProductCard from './SearchProductCard';
import { HoverContentContainer } from '@/components/library';
import {
	PADDING_X,
	productCardBoxShadow,
} from '../../_core-components/config/lib/constants/constants';
import Heading from '../../_core-components/components/text/Heading';
import SearchProductSkeleton from '../../_core-components/components/pulse-skeleton/SearchProductSkeleton';
import NormalText from '../../_core-components/components/text/NormalText';

type SearchBoxProps = BoxProps & {
	header: any;
	basic: any;
	searchValue: string;
	isFetching: boolean;
	data: any;
	content?: any;
	dataModel?: any;
	path?: any;
	css?: any;
};

const SearchShowBox: FC<SearchBoxProps> = ({
	header,
	basic,
	searchValue,
	isFetching,
	data,
	path,
	content,
	dataModel,
	css,
	...props
}) => {
	const doc = content?.header;
	return (
		<>
			{searchValue && (
				<HoverContentContainer
					type='content'
					path={path}
					title='Banner Information'
					data={content}
					dataModel={dataModel}
					px={PADDING_X}
					position='absolute'
					w='full'
					h='100vh'
					top='45px'
					zIndex={990}>
					<Container
						css={css}
						{...props}>
						<Heading
							fontSize={`${css?.labelSize || 12}px`}
							color={css?.fgColor || '#000'}
							basic={basic}>
							Products
						</Heading>
						{isFetching && [1, 2, 3, 4].map((item: number) => <SearchProductSkeleton key={item} />)}
						{!isFetching && (
							<>
								{data && data?.totalDocs == 0 && (
									<ProductText basic={basic}>No Products Found</ProductText>
								)}
							</>
						)}
						<Box>
							{!isFetching && (
								<>
									{data &&
										data?.totalDocs > 0 &&
										data?.doc?.map((item: any, i: number) => (
											<SearchProductCard
												basic={basic}
												css={css}
												item={item}
												key={i}
											/>
										))}
								</>
							)}
						</Box>
					</Container>
				</HoverContentContainer>
			)}
		</>
	);
};

export default SearchShowBox;

const Container = ({ children, css, ...props }: BoxProps & { children: ReactNode; css: any }) => (
	<Box
		position={'absolute'}
		top='50px'
		left='50%'
		transform={'translate(-50%)'}
		w='full'
		// maxW='650px'
		mx='auto'
		h='auto'
		zIndex={'9'}
		px='2rem'
		py='1rem'
		boxShadow={productCardBoxShadow}
		background={css?.bgColor || '#fff'}
		color={css?.fgColor || '#000'}>
		{children}
	</Box>
);
const ProductText = ({ children, basic, ...props }: TextProps & { children: any; basic: any }) => (
	<NormalText
		fontSize='1.4rem'
		mb='1.5rem'
		basic={basic}
		textAlign='center'
		{...props}>
		{children}
	</NormalText>
);
