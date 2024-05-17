import { Badge, Checkbox, TableCellProps } from '@chakra-ui/react';
import moment from 'moment';
import React, { ReactNode } from 'react';
import CustomTd from './CustomTd';
import { TableObjectDataProps } from '../../types';

// Define the type for the props of the TableData component
type TableDataPropsType = TableCellProps &
	TableObjectDataProps & {
		children: any;
		key: string;
	};

type ComponentProps = TableCellProps & {
	children: any;
};

// Define an object to map the type of the content to the corresponding component
const typeToComponent: any = {
	// If the type is 'date', format the content as a date
	date: ({ children, ...props }: ComponentProps): any => (
		<CustomTd
			fontSize={{ base: '1rem', md: '.7rem' }}
			{...props}>
			{children ? moment(children).calendar() : '--'}
		</CustomTd>
	),
	'date-only': ({ children, ...props }: ComponentProps): any => (
		<CustomTd
			fontSize={{ base: '1rem', md: '.7rem' }}
			{...props}>
			{children ? moment(children).format('YYYY-MM-DD') : '--'}
		</CustomTd>
	),
	time: ({ children, ...props }: ComponentProps): any => (
		<CustomTd
			fontSize={{ base: '1rem', md: '.7rem' }}
			{...props}>
			{children ? moment(children).format('hh:mm A') : '--'}
		</CustomTd>
	),
	// If the type is 'price', format the content as a price
	price: ({ children, ...props }: ComponentProps): ReactNode => (
		<CustomTd
			fontWeight='600'
			{...props}>
			$ {children?.toLocaleString()}
		</CustomTd>
	),
	// If the type is 'boolean', format the content as a boolean
	boolean: ({ children, ...props }: ComponentProps): ReactNode => (
		<CustomTd {...props}>{children ? 'Yes' : 'No'}</CustomTd>
	),

	// If the type is 'image-text', format the content as an image
};

const TableData: React.FC<TableDataPropsType> = ({
	children,
	id,
	type,
	tagType,
	imageKey,
	key,
	...props
}) => {
	// Determine the component to use based on the type of the content
	const Component = type ? typeToComponent[type] : CustomTd;
	// Render the component with the given props and content

	if (type == 'tag') {
		const getColor = (value: string) => {
			const tag = tagType?.find(tag => tag.value === value);
			return tag ? tag.color : 'gray';
		};
		return (
			<CustomTd>
				<Badge
					colorScheme={getColor(children)}
					size='2xs'
					fontSize='12px'>
					{children}
				</Badge>
			</CustomTd>
		);
	}

	if (type === 'image-text') {
		return (
			<CustomTd
				display='flex'
				alignItems='center'
				gap={2}
				src={imageKey}
				{...props}
				type='image-text'>
				{children}
			</CustomTd>
		);
	}

	return <Component {...props}>{children}</Component>;
};

export default TableData;
