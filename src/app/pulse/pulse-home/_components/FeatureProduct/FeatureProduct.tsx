import React, { FC, ReactNode } from 'react';
import { TextProps } from '@chakra-ui/react';
import {
	placeholderLogo,
	PADDING_X,
} from '../../../../../components/library/config/lib/constants/constants';
import Heading from './Heading';
import {
	Box,
	BoxProps,
	Center,
	CenterProps,
	Flex,
	Grid,
	Image,
	Input,
	Text,
} from '@chakra-ui/react';
import {
	HomeContentProps,
	HoverContentContainer,
	Icon,
	IconNameOptions,
} from '@/components/library';
import NormalText from './NormalText';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { ProductCard } from './Product';
// import { PADDING_X } from '.';
export const padding = {
	PADDING_X_2XL: '18rem',
	PADDING_X_LG: '12rem',
	PADDING_X_MOBILE: '1rem',
};
type HeaderConfigProps = {
	bgColor: string; //
	fgColor: string; //
	borderColor: string; //
	searchBoxBg: string; //
	searchBoxFg: string; //
	searchBoxIcon: string;
	iconBg: string; //
	iconFg: string; //
	tagBg: string; //
	tagFg: string; //
	logo?: string; //
	searchBoxText: string; //
	searchBoxTextColor: string; //
	searchBoxRadius: string; //
	iconRadius: string; //
};
const TEMPLATE_COLUMN = {
	base: 'repeat(2, 1fr)',
	lg: 'repeat(3, 1fr)',
	xl: 'repeat(4, 1fr)',
};
const FeatureProduct: FC<HomeContentProps> = ({
	dataModel,
	content,
	path,
	data,
	basic,
}) => {
	const header = content?.header;
	const doc: HeaderConfigProps = content?.header;
	const collections = data?.content?.collections;
	const css = data?.content?.homeProductCss;

	///////// temporary hongo product data
	// const { data:products, isLoading, isSuccess, isFetching } = useGetContentQuery({
	//         path: 'hongo',
	//     });

	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={doc?.bgColor}
			borderBottom={`1px solid ${doc?.borderColor}`}
			px={PADDING_X}
			position='sticky'
			top='0'
		>
			<Box py='2rem'>
				<Flex py='1rem' flexDir='column' alignItems={css?.align} mb='1rem'>
					<Title css={css}>{collections?.title}</Title>
					<SubTitle css={css}>{collections?.subTitle}</SubTitle>
				</Flex>
				{/* <Grid templateColumns={TEMPLATE_COLUMN} gap={4}>
				{products?.doc?.map((item: any, i: number) => (
					<ProductCard key={i} item={item} css={css} />
				))}
			</Grid> */}
			</Box>
		</HoverContentContainer>
	);
};

export default FeatureProduct;

const Title = ({
	children,
	css,
	...props
}: TextProps & { children: any; css: any }) => (
	<Heading
		fontSize={{
			base: css?.titleFontSizeBASE,
			xl: css?.titleFontSizeBG,
		}}
		color={css?.titleColor}
		fontWeight={css?.titleFontWeight}
		css={css}
		{...props}
	>
		{children}
	</Heading>
);

const SubTitle = ({
	children,
	css,
	...props
}: TextProps & { children: any; css: any }) => (
	<NormalText
		fontSize={{
			base: css?.subTitleFontSizeBASE,
			xl: css?.subTitleFontSizeBG,
		}}
		color={css?.subTitleColor}
		fontWeight={css?.titleFontWeight}
		css={css}
		{...props}
	>
		{children}
	</NormalText>
);
