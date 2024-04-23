import { TableProps } from '@chakra-ui/react';

export type CustomTableProps = TableProps & {
	children: React.ReactNode;
	header?: React.ReactNode;
	data: any;
	isLoading: boolean;
	col?: number;
	filters?: string;
	preferences?: any;
	path?: any;
	hidePreferences?: boolean;
	selectable?: boolean;
	selectedItems?: any;
};
