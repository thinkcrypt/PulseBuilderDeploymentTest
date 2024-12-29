import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { Box, BoxProps, Flex, Grid, Image, Text, TextProps } from "@chakra-ui/react";
const TEMPLATE_COLUMN = {
  base: "repeat(2, 1fr)",
  md: "repeat(3, 1fr)",
  lg: "repeat(4, 1fr)",
  xl: "repeat(5, 1fr)",
  "2xl": "repeat(6, 1fr)",
};

type FeaturedCategoryProps = BoxProps & {
  content: any;
  basic: any;
};
import {
	HomeContentProps,
	HoverContentContainer,
	useGetItemNameById,
} from "@/components/library";
import CollectionCard from "./CollectionCard";
import { jsonData } from "@/components/library/config/lib/data";
import Headng from "@/components/text/Heading";
import NormalText from "@/components/text/NormalText";
import { Column } from '@/commerce-components';
export const padding = {
  PADDING_X_2XL: "18rem",
  PADDING_X_LG: "12rem",
  PADDING_X_MOBILE: "1rem",
};

type FeaturedCategoriesProps = {};
export const PADDING_X = { base: 6, md: 24 };
// dataModel, content, path, data
const FeaturedCategories: FC<HomeContentProps> = ({
  dataModel,
  content,
  path,
  data,
  basic,
}) => {
  const banner = content?.banner;
  const collectionsCss = content?.collectionsCss;
  const doc: FeaturedCategoriesProps = content?.collections;
  const collections = content?.collections;
  const css = content?.collectionsCss;

  return (
    <HoverContentContainer
      type="content"
      path={path}
      title="Banner Information"
      data={content}
      dataModel={dataModel}
      bg={collectionsCss?.bgColor}
      borderBottom={`1px solid ${banner?.borderColor}`}
      px={PADDING_X}
      position="sticky"
      top="0"
    >
      <SectionPadding bg={collectionsCss?.bgColor} overflow="hidden" py="3rem">
        <Flex py="1rem" flexDir="column" alignItems={css?.align} mb="1rem">
          <Title css={css}>{collections ? collections?.title : "-"}</Title>
          <SubTitle css={css}>
            {collections ? collections?.subTitle : "-"}
          </SubTitle>
        </Flex>
        <Grid templateColumns={TEMPLATE_COLUMN} gap={4}>
          {collections?.items &
            collections?.items?.map((item: any, i: number) => (
              <CollectionCard key={i} item={item} css={css} />
            ))}
        </Grid>
      </SectionPadding>
    </HoverContentContainer>
  );
	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={basic?.cardBg}
			borderBottom={`1px solid ${banner?.borderColor}`}
			px={PADDING_X}
			position='sticky'
			top='0'
		>
			<>
				<Flex py='1rem' flexDir='column' alignItems={css?.align} mb='1rem'>
					<Title css={css}>{collections ? collections?.title : '-'}</Title>
					<SubTitle css={css}>
						{collections ? collections?.subTitle : '-'}
					</SubTitle>
				</Flex>
				<Grid
					pb={12}
					borderBottomWidth={1}
					borderBottomColor={basic?.borderColor}
					rowGap={4}
					gridTemplateColumns={{
						base: 'repeat(2, 1fr)',
						md: 'repeat(3, 1fr)',
						lg: 'repeat(4, 1fr)',
					}}
					gap={4}
				>
					{content?.collections?.items?.length <= 0 && (
						<Text>No items found</Text>
					)}
					{content?.collections?.items?.map(
						(item: any, i: number) =>
							i < 4 && (
								<GetItem key={i} path={item?.type} id={item?.id} data={data} />
							)
					)}
				</Grid>
			</>
		</HoverContentContainer>
	);
};
export default FeaturedCategories;

const SectionPadding = ({
  children,
  ...props
}: BoxProps & { children: ReactNode }) => (
  <Box
    px={{
      base: padding.PADDING_X_MOBILE,
      lg: padding.PADDING_X_LG,
      "2xl": padding.PADDING_X_2XL,
    }}
    w="full"
    {...props}
  >
    {children}
  </Box>
);

const Title = ({
  children,
  css,
  ...props
}: TextProps & { children: any; css: any }) => (
  <Headng
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
  </Headng>
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
