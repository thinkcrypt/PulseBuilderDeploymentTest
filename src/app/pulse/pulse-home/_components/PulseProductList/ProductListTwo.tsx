import React, { FC, ReactNode, useState } from 'react';
import {
	Heading,
	Text,
	Flex,
	Center,
	FlexProps,
	TextProps,
} from '@chakra-ui/react';
import {
	Column,
	Button,
	AddProductListModal,
	SpaceBetween,
	DeleteProductListModal,
	EditProductListModal,
	ViewProductContainer,
	sortDataByPriority,
	HomeContentProps,
	HoverContentContainer,
} from '@/components/library';
import { NormalText } from '../text';
import PulseCollectionDetails from './PulseCollection';
import { PADDING_X } from '@/components/library/config/lib/constants/constants';
const ProductListTwo: FC<HomeContentProps> = ({
	dataModel,
	content,
	basic,
	path,
	data,
}) => {
	const productList = sortDataByPriority(content?.productListTwo);
	// const { basic } = data;
	const css = data?.content?.homeProductCss;
	if (!data || !content) return null;

	return (
		<HoverContentContainer
			bg={basic?.bgColor}
			path={path}
			title='Product List'
			edit={false}
			data={content?.productList}
			dataModel={dataModel}
			px={PADDING_X}
			position='sticky'
			top='0'
		>
			<Column gap={0}>
				{/* <Flex py='1rem' flexDir='column' alignItems={css?.align} mb='1rem'>
					<Title basic={basic} css={css}>
						{content?.collections?.title}
					</Title>
					<SubTitle basic={basic} css={css}>
						{content?.collections?.subTitle}
					</SubTitle>
				</Flex> */}

				{/* Here goes our sytled product card */}
				{productList?.map((item: any, i: number) => (
					<Container key={i} item={item} dataModel={dataModel}>
						<HeadingContainer>
							<Column>
								<Heading
									fontFamily={basic?.primaryFont}
									color={basic?.primaryTextColor}
									_dark={{ color: basic?.primaryTextColor }}
									size='xl'
								>
									{item.title}
								</Heading>
							</Column>
						</HeadingContainer>

						<PulseCollectionDetails
							id={item?.id}
							type={item?.type}
							config={basic}
							css={css}
							dataModel={dataModel}
							data={data}
						/>
					</Container>
				))}
			</Column>
			<AddProductListModal dataModel={dataModel} path='pulse'>
				<Center
					mx={6}
					cursor='pointer'
					borderColor={basic?.btnColor}
					_dark={{
						borderColor: basic?.btnColor,
						color: basic?.btnColor,
					}}
					my={4}
					h='100px'
					w='full'
					fontSize='2rem'
					border='1px dashed'
					borderRadius={4}
				>
					<Heading
						fontFamily={basic?.primaryFont}
						_dark={{ color: basic?.btnColor }}
					>
						+ Add Product List
					</Heading>
				</Center>
			</AddProductListModal>
		</HoverContentContainer>
	);
};

const Container = ({
	children,
	item,
	dataModel,
	...props
}: FlexProps & { children: ReactNode; item: any; dataModel: any }) => {
	const [hover, setHover] = useState(false);
	const mouseEnter = () => setHover(true);
	const mouseLeave = () => setHover(false);
	// // product list keys
	// const [productListKeys, setProductListKeys] = useState<string>('');
	// const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
	// 	setProductListKeys(event.target.value);
	// };
	const editButton = (
		<Button w='100px' size='lg' borderRadius={0} colorScheme='gray'>
			Edit
		</Button>
	);

	const deleteButton = (
		<Button w='100px' size='lg' borderRadius={0} colorScheme='red'>
			Delete
		</Button>
	);

	if (!item) return null;

	return (
		<Column
			onMouseEnter={mouseEnter}
			onMouseLeave={mouseLeave}
			py={4}
			// px={6}
			position='relative'
			{...props}
		>
			{hover && (
				<Overlay>
					<EditProductListModal
						path='pulse'
						id={item?._id}
						dataModel={dataModel}
						data={{ ...item }}
					>
						{editButton}
					</EditProductListModal>

					<DeleteProductListModal
						path='pulse'
						id={item?._id}
						title={item?.title}
					>
						{deleteButton}
					</DeleteProductListModal>
				</Overlay>
			)}
			{children}
		</Column>
	);
};
//

const HeadingContainer = ({ children }: { children: ReactNode }) => (
	<SpaceBetween w='full' py={6}>
		{children}
	</SpaceBetween>
);

const Overlay = ({ children }: { children: ReactNode }) => (
	<Center
		gap={2}
		cursor='pointer'
		position='absolute'
		top={0}
		left={0}
		w='full'
		flex={1}
		zIndex={998}
		bg='rgba(0,0,0,0.5)'
		h='full'
	>
		{children}
	</Center>
);
const Title = ({
	children,
	css,
	basic,
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

export default ProductListTwo;
