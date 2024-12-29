import Heading from '@/components/text/Heading';
import NormalText from '@/components/text/NormalText';
// import { jsonData } from '@/lib/config/data';
import {
	Box,
	BoxProps,
	Flex,
	Grid,
	Image,
	Text,
	TextProps,
} from '@chakra-ui/react';

const TEMPLATE_COLUMN = {
	base: 'repeat(2, 1fr)',
	md: 'repeat(3, 1fr)',
	lg: 'repeat(4, 1fr)',
	xl: 'repeat(6, 1fr)',
	'2xl': 'repeat(8, 1fr)',
};

import { FC } from 'react';
import { CollectionCard } from './components';
import { Column } from '@/commerce-components';
import { HoverContentContainer, useGetItemNameById } from '@/components/library';

type FeaturedCategoryProps = BoxProps & {
	content: any;
	basic: any;
	data?: any;
	path?: string;
	dataModel?: any;
};

const FeaturedCategory: FC<FeaturedCategoryProps> = ({
	path,
	data,
	content,
	basic,
	dataModel,
}) => {
	const collections = content?.collections;
	const css = content?.collectionsCss;

	return (

		<HoverContentContainer
		type="content"
		path={path}
		title="Banner Information"
		data={content}
		dataModel={dataModel}
		// bg={banner?.bgColor}
		// borderBottom={`1px solid ${banner?.borderColor}`}
		// px={PADDING_X}
		position="sticky"
		top="0"
	  >
		<Box py='2rem'>
			<Flex py='1rem' flexDir='column' alignItems={css?.align} mb='1rem'>
				<Title basic={basic} css={css}>
					{collections?.title}
				</Title>
				<SubTitle basic={basic} css={css}>
					{collections?.subTitle}
				</SubTitle>
			</Flex>
			{/* <Grid templateColumns={TEMPLATE_COLUMN} gap={4}>
				{jsonData?.collections?.map((item: any, i: number) => (
					<CollectionCard basic={basic} key={i} item={item} css={css} />
				))}
			</Grid> */}
			<Grid
				pb={12}
				borderBottomWidth={1}
				borderBottomColor={basic?.borderColor}
				rowGap={4}
				gridTemplateColumns={{
					base: 'repeat(2, 1fr)',
					md: 'repeat(4, 1fr)',
					lg: 'repeat(8, 1fr)',
				}}
				gap={4}
			>
				{content?.collections?.items?.length <= 0 && (
					<Text>No items found</Text>
				)}
				{content?.collections?.items?.map(
					(item: any, i: number) =>
						i < 16 && (
							// <GetItem key={i} path={item?.type} id={item?.id} data={data} />
							// <CollectionCard key={i} basic={basic} path={item} id={item?.id} item={item} css={css} />
							<CollectionCard key={i} path={item?.type} id={item?.id} data={data} css={css} basic={basic}/>
						)
				)}
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
		{...props}
	>
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
		{...props}
	>
		{children}
	</NormalText>
);
const GetItem = ({
	path,
	id,
	data,
}: {
	path: string;
	id: string;
	data: any;
}) => {
	const { name, image } = useGetItemNameById({
		id,
		path,
	});

	return (
		<Column gap={4} align='center'>
			<Image
				borderRadius={data?.content?.collections?.borderRadius}
				src={image || 'nai'}
				h={{ base: '180px', md: '200px' }}
				w={data?.content?.collections?.borderRadius > 20 ? '200px' : '100%'}
				objectFit='cover'
				alt='dfdf'
			/>
			<Text
				textAlign='center'
				fontWeight='500'
				fontSize='1.4rem'
				fontFamily={data?.basic?.primaryFont}
				color={data?.basic?.primaryTextColor}
				_dark={{ color: data?.basic?.primaryTextColor }}
			>
				{name || 'processing...'}
			</Text>
		</Column>
	);
};
