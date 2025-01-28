// import Heading from '@/components/text/Heading';
// import NormalText from '@/components/text/NormalText';
// import { jsonData } from '@/lib/config/data';
import { Box, BoxProps, Flex, Grid, Image, Text, TextProps } from '@chakra-ui/react';

import { FC } from 'react';
import { CollectionCard } from './components';
import { HoverContentContainer, useGetItemNameById } from '@/components/library';
import { PADDING_X } from '../../_core-components/config/lib/constants/constants';
import Heading from '../../_core-components/components/text/Heading';
import NormalText from '../../_core-components/components/text/NormalText';
// import { PADDING_} from '@/components/library/config/lib/constants/constants';

type FeaturedCategoryProps = BoxProps & {
	content: any;
	basic: any;
	data?: any;
	path?: string;
	dataModel?: any;
};

const TEMPLATE_COLUMN = {
	base: 'repeat(2, 1fr)',
	sm: 'repeat(3, 1fr)',
	lg: 'repeat(4, 1fr)',
	xl: 'repeat(6, 1fr)',
	'2xl': 'repeat(8, 1fr)',
};

const FeaturedCategory: FC<FeaturedCategoryProps> = ({ path, data, content, basic, dataModel }) => {
	const collections = content?.collections;
	const css = content?.collectionsCss;
	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			px={PADDING_X}
			position='sticky'
			top='0'>
			<Box py='2rem'>
				<Flex
					py='1rem'
					flexDir='column'
					alignItems={css?.align}
					mb='1rem'>
					<Title
						basic={basic}
						css={css}
						textAlign={css?.align}>
						{collections?.title}
					</Title>
					<SubTitle
						basic={basic}
						css={css}
						textAlign={css?.align}>
						{collections?.subTitle}
					</SubTitle>
				</Flex>
				<Grid
					templateColumns={TEMPLATE_COLUMN}
					gap={css?.outerGap}>
					{collections?.items?.slice(0, 16)?.map((item: any, i: number) => (
						<CollectionCard
							basic={basic}
							key={i}
							path={item?.type}
							id={item?.id}
							item={item}
							css={css}
						/>
					))}
				</Grid>
			</Box>
		</HoverContentContainer>
	);
};

export default FeaturedCategory;

const Title = ({
	children,
	basic,
	css,
	...props
}: TextProps & { children: any; css: any; basic: any }) => (
	<Heading
		fontSize={{
			base: css?.titleFontSizeBASE,
			xl: css?.titleFontSizeBG,
		}}
		color={css?.titleColor}
		fontWeight={css?.titleFontWeight}
		css={css}
		basic={basic}
		{...props}>
		{children}
	</Heading>
);

const SubTitle = ({
	children,
	css,
	basic,
	...props
}: TextProps & { children: any; css: any; basic: any }) => (
	<NormalText
		fontSize={{
			base: css?.subTitleFontSizeBASE,
			xl: css?.subTitleFontSizeBG,
		}}
		color={css?.subTitleColor}
		fontWeight={css?.titleFontWeight}
		css={css}
		basic={basic}
		{...props}>
		{children}
	</NormalText>
);
