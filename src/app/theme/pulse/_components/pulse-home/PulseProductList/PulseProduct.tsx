import React, { FC, ReactNode, use, useState } from 'react';
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
	sortDataByPriority,
	HoverContentContainer,
} from '@/components/library';
import { NormalText } from '../text';
import PulseCollectionDetails from './PulseCollection';
import { PADDING_X } from '../../../_components/index';
import { useAppSelector } from '@/hooks';
import ServiceCardSkeleton from '../../components/pulse-skeleton/ServiceCardSkeleton';
type HomeContentProps = {
	content: any;
	dataModel: any;
	path: any;
	data?: any;
	basic?: any;
	isLoading?: any;
};
const PulseProductListComponent: FC<HomeContentProps> = ({
	dataModel,
	content,
	basic,
	path,
	isLoading,
	data,
}) => {
	const { display } = useAppSelector(state => state.builder);
	const productList = sortDataByPriority(content?.productList);

	const css = data?.content?.homeProductCss;
	if (!data || !content) return null;
	// console.log('cssss card:', css);
	return (
		<HoverContentContainer
			bg={basic?.bgColor}
			path={path}
			title='Product List'
			edit={false}
			data={content?.productList}
			dataModel={dataModel}
			px={{
				base: PADDING_X.base,
				md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
			}}
			position='sticky'
			top='0'
		>
			{isLoading && <ServiceCardSkeleton />}
			<Column gap={0}>
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
			<AddProductListModal
				dataModel={dataModel}
				path='pulse'
				productListKeys='productList'
			>
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
}: FlexProps & {
	children: ReactNode;
	item: any;
	dataModel: any;
}) => {
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
						productListKeys='productList'
					>
						{editButton}
					</EditProductListModal>

					<DeleteProductListModal
						path='pulse'
						id={item?._id}
						title={item?.title}
						productListKeys='productList'
					>
						{deleteButton}
					</DeleteProductListModal>
				</Overlay>
			)}
			{children}
		</Column>
	);
};

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

export default PulseProductListComponent;
