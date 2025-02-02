import React, { FC, ReactNode, useState } from 'react';
import { Heading, Text, Flex, Center, FlexProps } from '@chakra-ui/react';
import {
	Column,
	Button,
	AddProductListModal,
	DeleteProductListModal,
	EditProductListModal,
	HoverContentContainer,
	sortDataByPriority,
	ColRow,
} from '@/components/library';
import { HomeContentProps, CollectionDetails } from '.';
import { FlexChild } from '@/builder';
import { SubHeading, Title } from './hero';
import { useAppSelector } from '@/hooks';

const ProductListComponent: FC<HomeContentProps> = ({ dataModel, content, data }) => {
	const productList = sortDataByPriority(content?.productList);

	return (
		<HoverContentContainer
			path='nexa'
			title='Product List'
			edit={false}
			data={content?.productList}
			dataModel={dataModel}
			bg={data?.basic?.bgColor}>
			{productList?.length <= 0 && <Text>No product list found</Text>}
			<Column gap={4}>
				{productList?.map((item: any, i: number) => (
					<Container
						key={i}
						item={item}
						dataModel={dataModel}>
						<TopContainer>
							<Column
								gap={4}
								textAlign={{ base: 'center', md: 'left' }}>
								<Title
									fontFamily={data?.basic?.primaryFont}
									color={data?.basic?.primaryTextColor}
									type='h4'>
									{item?.title}
								</Title>
								<SubHeading
									fontFamily={data?.basic?.secondaryFont}
									color={data?.basic?.secondaryTextColor}>
									{item?.subTitle}
								</SubHeading>
							</Column>
						</TopContainer>

						<CollectionDetails
							data={data}
							id={item?.id}
							type={item.type}
						/>
					</Container>
				))}
			</Column>

			<AddProductListModal
				dataModel={dataModel}
				path='nexa'>
				<Center
					{...addContainerCss}
					borderColor={data?.basic?.btnColor}
					_dark={{
						borderColor: data?.basic?.btnColor,
						color: data?.basic?.btnColor,
					}}>
					<Heading
						fontFamily={data?.basic?.primaryFont}
						_dark={{ color: data?.basic?.btnColor }}>
						+ Add Product List
					</Heading>
				</Center>
			</AddProductListModal>
		</HoverContentContainer>
	);
};

const addContainerCss: FlexProps = {
	mx: 8,
	cursor: 'pointer',
	my: 4,
	h: '100px',
	textAlign: 'center',
	w: 'full',
	fontSize: '2rem',
	border: '1px dashed',
	borderRadius: 4,
};

const TopContainer: FC<FlexChild> = ({ children }) => (
	<ColRow
		gap={6}
		//	justify='center'
		align='center'>
		{children}
	</ColRow>
);

const Container = ({
	children,
	item,
	dataModel,
	...props
}: FlexProps & { children: ReactNode; item: any; dataModel: any }) => {
	const [hover, setHover] = useState(false);
	const mouseEnter = () => setHover(true);
	const mouseLeave = () => setHover(false);

	const editButton = (
		<Button
			w='100px'
			size='lg'
			borderRadius={0}
			colorScheme='gray'>
			Edit
		</Button>
	);

	const deleteButton = (
		<Button
			w='100px'
			size='lg'
			borderRadius={0}
			colorScheme='red'>
			Delete
		</Button>
	);
	const { display } = useAppSelector(state => state.builder);

	if (!item) return null;

	return (
		<Column
			onMouseEnter={mouseEnter}
			onMouseLeave={mouseLeave}
			py={4}
			pb={0}
			px={display == 'sm' ? 4 : 8}
			position='relative'
			{...props}>
			{hover && (
				<Overlay>
					<EditProductListModal
						path='nexa'
						id={item?._id}
						dataModel={dataModel}
						data={{ ...item }}>
						{editButton}
					</EditProductListModal>

					<DeleteProductListModal
						path='nexa'
						id={item?._id}
						title={item?.title}>
						{deleteButton}
					</DeleteProductListModal>
				</Overlay>
			)}
			{children}
		</Column>
	);
};

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
		h='full'>
		{children}
	</Center>
);

export default ProductListComponent;
