import React from 'react';
import { Center, TextProps, Tr, Stack } from '@chakra-ui/react';
import TableData from './data/TableData';
import TableSelectItem from './data/TableSelectItem';
import useIsMobile from '../hooks/useIsMobile';

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

	const isMobile = useIsMobile();

	if (isMobile) {
		return (
			<Stack
				position='relative'
				width='100%'
				borderWidth={1}
				borderRadius='16px'
				mb={2}
				p={4}
				direction='column'
				{...props}>
				{selectable && <TableSelectItem id={id} />}
				{children}
			</Stack>
		);
	}

	return (
		<Tr
			h='2.5rem'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}>
			{selectable && <TableSelectItem id={id} />}
			{children}
		</Tr>
	);
};

export default TableRow;
