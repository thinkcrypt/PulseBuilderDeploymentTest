import { convertToTableFields, TableObjectProps } from '@/components/library';
import schema from './order.schema';
import itemMenu from './itemMenu';

const tableLayout: string[] = [
	'invoice',
	'customer',
	'location',
	'status',
	'origin',
	'totalItems',
	'vat',
	'subTotal',
	'total',
	'profit',
	'isPaid',
	'dueAmount',
	'returnAmount',
	'paidAmount',
	'coupon',
];

export const viewAllDataFields = convertToTableFields({ schema, fields: tableLayout });

const viewAll: TableObjectProps = {
	title: 'Orders',
	path: 'orders',
	// clickable: true,
	//toPath: '/items/edit',
	export: true,
	// select: {
	// 	show: true,
	// 	menu: multiSelectMenu,
	// },
	button: {
		title: 'Add Order',
		path: '/orders/add',
	},
	menu: itemMenu,
	data: viewAllDataFields,
};

export { viewAll as viewAll };
