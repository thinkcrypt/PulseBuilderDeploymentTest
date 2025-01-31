import { Box, BoxProps, Flex, Grid, Text, TextProps } from '@chakra-ui/react';

import { FC } from 'react';
import { CollectionCard } from './components';
import { generateTextModel, HoverContentContainer, useGetItemNameById } from '@/components/library';
import { PADDING_X, Heading, NormalText } from '../../../_components/index';
import { useAppSelector } from '@/hooks';

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
const headingModel = [
	{
		sectionTitle: 'Title',
		name: `collections.title`,
		label: 'Content',
		isRequired: true,
		type: 'text',
	},
	...generateTextModel('collectionsCss.titleCss', 'Title Style'),
];
const subHeadingModel = [
	{
		sectionTitle: 'Sub Title',
		name: `collections.subTitle`,
		label: 'Content',
		isRequired: true,
		type: 'text',
	},
	...generateTextModel('collectionsCss.subTitleCss', 'Title Style'),
];

const FeaturedCategory: FC<FeaturedCategoryProps> = ({ path, data, content, basic, dataModel }) => {
	const { display } = useAppSelector(state => state.builder);
	const collections = content?.collections;
	const css = content?.collectionsCss;
	return (
		<HoverContentContainer
			section={true}
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			px={{
				base: PADDING_X.base,
				md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
			}}
			position='sticky'
			top='0'>
			<Box py='2rem'>
				<Flex
					py='1rem'
					flexDir='column'
					alignItems={css?.align}
					mb='1rem'>
					<HoverContentContainer
						component={true}
						type='content'
						path={path}
						title='Featured Title'
						data={content}
						dataModel={headingModel}>
						<Text
							{...css?.titleCss}
							textAlign={css?.align}
							fontSize={{
								base: css?.titleCss?.fontSize.base,
								md: display == 'sm' ? css?.titleCss?.fontSize.base : css?.fontSize.md,
							}}>
							{collections?.title}
						</Text>
					</HoverContentContainer>
					<HoverContentContainer
						component={true}
						type='content'
						path={path}
						title='Featured Sub Title'
						data={content}
						dataModel={subHeadingModel}>
						<Text
							{...css?.subTitleCss}
							textAlign={css?.align}
							fontSize={{
								base: css?.titleCss?.fontSize.base,
								md: display == 'sm' ? css?.titleCss?.fontSize.base : css?.titleCss?.fontSize.md,
							}}>
							{collections?.subTitle}
						</Text>
					</HoverContentContainer>

					{/* <SubTitle basic={basic} css={css} textAlign={css?.align}>
						{collections?.subTitle}
					</SubTitle> */}
				</Flex>
				<Grid
					templateColumns={{
						base: '1fr 1fr',
						xl: display === 'sm' ? '1fr 1fr 1fr' : 'repeat(8, 1fr)',
					}}
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
