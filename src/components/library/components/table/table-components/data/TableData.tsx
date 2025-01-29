import { Badge, TableCellProps, Text } from '@chakra-ui/react';
import moment from 'moment';
import React, { ReactNode } from 'react';

import { CustomTd } from './';
import { TableObjectDataProps } from '../../../../';

// Define the type for the props of the TableData component
type TableDataPropsType = TableCellProps &
	TableObjectDataProps & {
		children: any;
		key: string;
		colorScheme?: any;
	};

const TableData: React.FC<TableDataPropsType> = ({
	children,
	id,
	type,
	colorScheme,
	toLocaleStr,
	tagType,
	imageKey,
	key,
	...props
}) => {
	// Determine the component to use based on the type of the content

	switch (type) {
		case 'checkbox':
			return (
				<CustomTd>
					<Badge
						colorScheme={colorScheme ? colorScheme(children) : 'gray'}
						size='2xs'
						fontSize='12px'>
						{JSON.stringify(children)}
					</Badge>
				</CustomTd>
			);

		case 'tag':
			return (
				<CustomTd>
					<Badge
						colorScheme={colorScheme ? colorScheme(children) : 'gray'}
						size='2xs'
						fontSize='12px'>
						{JSON.stringify(children)}
					</Badge>
				</CustomTd>
			);
		case 'number':
			return (
				<CustomTd
					isNumeric={true}
					{...props}>
					{children?.toLocaleString()}
				</CustomTd>
			);

		case 'image-text':
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
		case 'time':
			return (
				<CustomTd
					fontSize={{ base: '1rem', md: '.7rem' }}
					{...props}>
					{children ? moment(children).format('hh:mm A') : '--'}
				</CustomTd>
			);
		case 'date-only':
			return (
				<CustomTd
					fontSize={{ base: '1rem', md: '.7rem' }}
					{...props}>
					{children ? moment(children).format('YYYY-MM-DD') : '--'}
				</CustomTd>
			);
		case 'date':
			return (
				<CustomTd
					fontSize={{ base: '1rem', md: '.7rem' }}
					{...props}>
					{children ? moment(children).calendar() : '--'}
				</CustomTd>
			);
		case 'boolean':
			return <CustomTd {...props}>{children ? 'Yes' : 'No'}</CustomTd>;
		default:
			return <CustomTd {...props}>{children}</CustomTd>;
	}
};

export default TableData;
