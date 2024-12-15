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

type HeroDataProps = {
	content: any;
	dataModel: any;
	path: string;
	data: any;
};

const CategoryComponent: FC<HeroDataProps> = ({ content, dataModel, path, data }) => {
	const { basic } = data;
	return (
		<HoverContentContainer
			title='Category Section'
			data={content}
			path={path}
			bg={basic?.bgColor}
			dataModel={dataModel}
			px={PADDING_X}>
			<Align
				py={12}
				justify='space-between'
				w='full'
				gap={4}>
				<Column>
					<Heading
						size='xl'
						color={basic?.primaryTextColor}
						_dark={{ color: basic?.primaryTextColor }}
						fontFamily={basic?.primaryFont}>
						{content?.collections?.title}
					</Heading>
				</Column>
			</Align>
			<Grid
				pb={12}
				borderBottomWidth={1}
				borderBottomColor={basic?.borderColor}
				rowGap={6}
				gridTemplateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
				gap={4}>
				{content?.collections?.items?.length <= 0 && <Text>No items found</Text>}
				{content?.collections?.items?.map(
					(item: any, i: number) =>
						i < 4 && (
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
				h='180px'
				w='180px'
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
