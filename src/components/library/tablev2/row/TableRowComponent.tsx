import { FC } from 'react';
import TableRow from '../TableRow';
import TableData from '../data/TableData';
import TableMenu from '../menu/TableMenu';
import EditableTableData from '../data/EditableTableData';
import { format } from 'date-fns';
import TableSelectItem from '../data/TableSelectItem';

type TableProps = {
	item: any;
	data: any[];
	menu: any;
	path: string;
	fields?: string[] | [];
	selectable?: boolean;
};

const TableRowComponent: FC<TableProps> = ({ item, data, menu, path, fields = [], selectable }) => {
	return (
		// Create a TableRow for each item
		<TableRow
			selectable={true}
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

					// If the item is editable, return an EditableTableData component
					if (editable)
						return (
							<EditableTableData
								type={type}
								dataKey={dataKey}
								path={path}
								value={
									editType == 'date' ? format(new Date(item[dataKey]), 'yyyy-MM-dd') : item[dataKey]
								}
								id={item?._id}
								key={dataKey}
								editType={editType}
								options={options}
								style={style}
							/>
						);

					// Return a TableData cell with the value
					return (
						<TableData
							key={dataKey}
							type={type}
							tagType={tagType}
							imageKey={item[imageKey]}>
							{value}
						</TableData>
					);
				}
			)}
		</TableRow>
	);
};

export default TableRowComponent;
