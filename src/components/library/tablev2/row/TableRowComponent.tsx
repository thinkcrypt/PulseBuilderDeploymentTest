import React, { FC, ReactNode } from 'react';
import TableRow from '../TableRow';
import TableData from '../data/TableData';
import TableMenu from '../menu/TableMenu';
import EditableTableData from '../data/EditableTableData';
import { format } from 'date-fns';
import { Grid, Heading } from '@chakra-ui/react';
import { useIsMobile, formatDataKey } from '../../';

type TableProps = {
	item: any;
	data: any[];
	menu: any;
	path: string;
	fields?: string[] | [];
	selectable?: boolean;
};

const TableRowComponent: FC<TableProps> = ({ item, data, menu, path, fields = [], selectable }) => {
	const isMobile = useIsMobile();
	return (
		// Create a TableRow for each item
		<TableRow
			selectable={!isMobile && true}
			id={item?._id}
			key={item?._id}
			actions={<div></div>}>
			{/* If the table is selectable, return a TableData cell with a checkbox */}

			{/* Map over the data keys and create a TableData cell for each */}
			{data.map(
				({ dataKey, type, image, imageKey, editable, editType, options, style, tagType }) => {
					// Split the dataKey into keys
					const keys = dataKey?.split('.');
					// Use the keys to get the value from the item
					const value =
						keys && keys?.length > 1
							? keys?.reduce((o: any, k: any) => (o && o[k] ? o[k] : undefined), item)
							: item[dataKey];

					// If the type is 'menu', return a TableMenu component
					if (type == 'menu')
						return (
							<TableMenu
								item={item}
								path={path}
								data={menu}
								id={item?._id}
								key={dataKey}
								title={item[dataKey]}
							/>
						);

					// If the item name is not in the fields array and type is not 'menu', return null
					if (!fields?.includes(dataKey) && type !== 'menu') {
						return null;
					}

					const Container = ({ children }: { children: ReactNode }) =>
						isMobile && type !== 'image-text' ? (
							<Grid
								gridTemplateColumns='1fr 1fr'
								gap={2}
								alignItems='center'
								_notLast={{ pb: 2 }}>
								{children}
							</Grid>
						) : (
							<>{children}</>
						);

					// If the item is editable, return an EditableTableData component
					if (editable)
						return (
							<Container key={dataKey}>
								{isMobile && <Heading size='xs'>{formatDataKey(dataKey)}</Heading>}
								<EditableTableData
									type={type}
									dataKey={dataKey}
									path={path}
									value={
										editType == 'date'
											? format(new Date(item[dataKey]), 'yyyy-MM-dd')
											: item[dataKey]
									}
									id={item?._id}
									key={dataKey}
									editType={editType}
									options={options}
									style={style}
								/>
							</Container>
						);

					// Return a TableData cell with the value
					return (
						<Container key={dataKey}>
							{isMobile && type !== 'image-text' && (
								<Heading size='xs'>{formatDataKey(dataKey)}</Heading>
							)}
							<TableData
								key={dataKey}
								type={type}
								tagType={tagType}
								imageKey={item[imageKey]}>
								{value}
							</TableData>
						</Container>
					);
				}
			)}
		</TableRow>
	);
};

export default TableRowComponent;
