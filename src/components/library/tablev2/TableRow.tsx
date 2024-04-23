import React from 'react';
import { Center, TextProps, Tr } from '@chakra-ui/react';
import TableData from './data/TableData';
import TableSelectItem from './data/TableSelectItem';

type TableRowProps = TextProps & {
	children: React.ReactNode;
	actions?: React.ReactNode;
	selectable?: boolean;
	id: string;
};

const TableRow: React.FC<TableRowProps> = ({ children, actions, selectable, id, ...props }) => {
	const [bg, setBg] = React.useState('transparent');
	const handleMouseEnter = () => {
		setBg('#ddd');
	};
	const handleMouseLeave = () => {
		setBg('transparent');
	};
	return (
		<Tr h='2.5rem' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...props}>
			{selectable && <TableSelectItem id={id} />}
			{children}
			{/* {actions && (
				<TableData>
					<Center border={`1px solid ${bg}`} p={1} px={2}>
						...
					</Center>
				</TableData>
			)} */}
		</Tr>
	);
};

export default TableRow;
