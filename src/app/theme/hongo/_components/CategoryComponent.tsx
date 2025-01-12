import React, { FC } from 'react';
import { Heading, Text, Image, Grid } from '@chakra-ui/react';
import {
	HoverContentContainer,
	Column,
	Align,
	useGetItemNameById,
	PLACEHOLDER_IMAGE,
} from '../../../../components/library';

import { PADDING_X } from '.';
import { useAppSelector } from '@/hooks';

type HeroDataProps = {
	content: any;
	dataModel: any;
	path: string;
	data: any;
};

const CategoryComponent: FC<HeroDataProps> = ({ content, dataModel, path, data }) => {
	const { basic } = data;
	const { display } = useAppSelector(state => state.builder);
	const px = display == 'sm' ? '16px' : PADDING_X;
	const limit = display == 'sm' ? 2 : 4;
	return (
		<HoverContentContainer
			title='Category Section'
			data={content}
			path={path}
			bg={basic?.bgColor}
			dataModel={dataModel}
			px={px}>
			<Align
				py={12}
				justify='space-between'
				w='full'
				gap={4}>
				<Heading
					fontSize={display == 'sm' ? '2rem' : '3rem'}
					color={basic?.primaryTextColor}
					_dark={{ color: basic?.primaryTextColor }}
					fontFamily={basic?.primaryFont}>
					{content?.collections?.title}
				</Heading>
			</Align>
			<Grid
				pb={12}
				borderBottomWidth={1}
				borderBottomColor={basic?.borderColor}
				rowGap={4}
				gridTemplateColumns={{
					base: 'repeat(2, 1fr)',
					md: 'repeat(2, 1fr)',
					lg: `repeat(${limit}, 1fr)`,
				}}
				gap={4}>
				{content?.collections?.items?.length <= 0 && <Text>No items found</Text>}
				{content?.collections?.items?.map(
					(item: any, i: number) =>
						i < limit && (
							<GetItem
								key={i}
								path={item?.type}
								id={item?.id}
								data={data}
							/>
						)
				)}
			</Grid>
		</HoverContentContainer>
	);
};

const GetItem = ({ path, id, data }: { path: string; id: string; data: any }) => {
	const { name, image } = useGetItemNameById({
		id,
		path,
	});

	return (
		<Column
			gap={4}
			align='center'>
			<Image
				borderRadius={data?.content?.collections?.borderRadius}
				src={image || PLACEHOLDER_IMAGE}
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
				_dark={{ color: data?.basic?.primaryTextColor }}>
				{name || 'processing...'}
			</Text>
		</Column>
	);
};

export default CategoryComponent;
