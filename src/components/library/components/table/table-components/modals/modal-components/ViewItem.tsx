import React, { FC } from 'react';
import { Badge, Box, Grid, GridProps, Heading, Text } from '@chakra-ui/react';

type ViewItemProps = GridProps & {
	title: string;
	type?: string;
	children: string | boolean | number | Date;
	colorScheme?: any;
};

const renderContent = (type: any, children: any, colorScheme: any) => {
	switch (type) {
		case 'tag':
			return (
				<Box alignItems='center'>
					<Badge colorScheme={colorScheme(children)}>{children.toString()}</Badge>
				</Box>
			);
		case 'date':
			return <Text fontSize='.95rem'>{children.toLocaleString()}</Text>;
		default:
			return <Text fontSize='.95rem'>{children}</Text>;
	}
};

const ViewItem: FC<ViewItemProps> = ({ title, type, children, colorScheme, ...props }) => {
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
			{renderContent(type, children, colorScheme)}
		</Grid>
	);
};

export default ViewItem;
