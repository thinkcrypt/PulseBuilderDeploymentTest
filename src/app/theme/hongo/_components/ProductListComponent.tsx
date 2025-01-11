import React, { FC, ReactNode, useState } from 'react';
import { Heading, Text, Flex, Center, FlexProps } from '@chakra-ui/react';
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
	BuilderEditButton,
	BuilderBgOverlay,
} from '@/components/library';
import { CollectionDetails } from './card';
import { PADDING_X } from '.';

const ProductListComponent: FC<HomeContentProps> = ({ dataModel, content, path, data }) => {
	const productList = sortDataByPriority(content?.productList);
	const { basic } = data;

	if (!data || !content) return null;

	return (
		<HoverContentContainer
			bg={basic?.bgColor}
			path={path}
			title='Product List'
			edit={false}
			data={content?.productList}
			dataModel={dataModel}
			position='relative'>
			<Column gap={0}>
				<Column
					py={4}
					px={PADDING_X}>
					<HeadingContainer>
						<Column>
							<Heading
								fontFamily={basic?.primaryFont}
								color={basic?.primaryTextColor}
								_dark={{ color: basic?.primaryTextColor }}
								size='xl'>
								Products
							</Heading>
						</Column>
					</HeadingContainer>

					<CollectionDetails
						limit={8}
						config={basic}
					/>
				</Column>
				{productList?.map((item: any, i: number) => (
					<Container
						key={i}
						item={item}
						dataModel={dataModel}>
						<HeadingContainer>
							<Column>
								<Heading
									fontFamily={basic?.primaryFont}
									color={basic?.primaryTextColor}
									_dark={{ color: basic?.primaryTextColor }}
									size='xl'>
									{item.title}
								</Heading>
							</Column>
						</HeadingContainer>

						<CollectionDetails
							id={item?.id}
							type={item?.type}
							config={basic}
						/>
					</Container>
				))}
			</Column>

			<AddProductListModal
				dataModel={dataModel}
				path='hongo'>
				<Center
					{...addProductListStyle}
					mx={PADDING_X}
					borderColor={basic?.btnColor}
					_dark={{
						borderColor: basic?.btnColor,
						color: basic?.btnColor,
					}}
					borderRadius={4}>
					<Heading
						fontFamily={basic?.primaryFont}
						_dark={{ color: basic?.btnColor }}>
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

	const editButton = <BuilderEditButton>Edit Section</BuilderEditButton>;

	const deleteButton = <BuilderEditButton btnType='delete'>Remove</BuilderEditButton>;

	if (!item) return null;

	return (
		<Column
			onMouseEnter={mouseEnter}
			onMouseLeave={mouseLeave}
			py={4}
			px={PADDING_X}
			position='relative'
			{...props}>
			{hover && (
				<BuilderBgOverlay>
					<Flex gap={2}>
						<EditProductListModal
							path='hongo'
							id={item?._id}
							dataModel={dataModel}
							data={{ ...item }}>
							{editButton}
						</EditProductListModal>

						<DeleteProductListModal
							path='hongo'
							id={item?._id}
							title={item?.title}>
							{deleteButton}
						</DeleteProductListModal>
					</Flex>
				</BuilderBgOverlay>
			)}
			{children}
		</Column>
	);
};

const HeadingContainer = ({ children }: { children: ReactNode }) => (
	<SpaceBetween
		w='full'
		py={6}>
		{children}
	</SpaceBetween>
);

const addProductListStyle = {
	cursor: 'pointer',
	my: 4,
	h: '100px',
	w: 'full',
	fontSize: '2rem',
	border: '1px dashed',
	borderRadius: 4,
};

export default ProductListComponent;
