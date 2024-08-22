import React, { FC } from 'react';
import { Badge, Box, Center, Flex, Grid, GridProps, Heading, Image, Text } from '@chakra-ui/react';
import { useGetByIdQuery } from '../../../../../store';
import { PLACEHOLDER_IMAGE } from '../../../../../';

type ViewItemProps = GridProps & {
	title: string;
	type?: string;
	children: string | boolean | number | Date;
	colorScheme?: any;
	path?: string;
};

const RenderTag = ({ path, item }: { path: string; item: any }) => {
	const { data } = useGetByIdQuery({ path, id: item });
	return <Badge>{data?.name}</Badge>;
};

const renderContent = (type: any, children: any, colorScheme: any, path: string | undefined) => {
	switch (type) {
		case 'data-array-tag':
			return (
				<Flex
					flexWrap='wrap'
					gap={2}
					alignItems='center'>
					{children?.map((item: any, i: number) => (
						<RenderTag
							key={i}
							path={path || ''}
							item={item}
						/>
					))}
				</Flex>
			);
			return;
		case 'tag':
			return (
				<Box alignItems='center'>
					<Badge colorScheme={colorScheme(children)}>{children.toString()}</Badge>
				</Box>
			);
		case 'image':
			return (
				<Center
					h='200px'
					w='200px'
					bg='sidebar.light'
					_dark={{ bg: 'background.dark' }}>
					<Image
						src={children || PLACEHOLDER_IMAGE}
						alt='image'
						w='100%'
						h='100%'
						objectFit='contain'
					/>
				</Center>
			);
		case 'date':
			return (
				<Text
					wordBreak='break-all'
					fontSize='.95rem'>
					{children.toLocaleString()}
				</Text>
			);
		default:
			return (
				<Text
					wordBreak='break-all'
					fontSize='.95rem'>
					{children}
				</Text>
			);
	}
};

const ViewItem: FC<ViewItemProps> = ({ title, type, children, colorScheme, path, ...props }) => {
	return (
		<Grid
			justify='center'
			px={6}
			pb={2}
			gridTemplateColumns='1fr 1fr'
			borderBottomWidth={1}
			borderColor='border.light'
			_dark={{ borderColor: 'border.dark' }}
			_last={{ borderBottomWidth: 0 }}
			{...props}>
			<Heading size='xs'>{title}:</Heading>
			{renderContent(type, children, colorScheme, path)}
		</Grid>
	);
};

export default ViewItem;
