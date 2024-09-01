// import schema from './order.schema.ts';
import { convertToViewFields, MenuItemProps } from '@/components/library';
import ViewOrderModal from '@/components/pos/ViewOrderModel';

const itemMenu: MenuItemProps[] = [
	{
		title: 'Edit',
		type: 'edit',
	},
	// {
	// 	title: 'Details',
	// 	type: 'redirect',
	// 	href: '/go/details',
	// },
	// {
	// 	title: 'View',
	// 	type: 'view-modal',
	// 	dataModel: convertToViewFields({ schema }),
	// },
	// {
	// 	title: 'Make Copy',
	// 	type: 'duplicate',
	// },
	{
		title: 'Delete',
		type: 'delete',
	},
	{
		title: 'View Order',
		type: 'custom-modal',
		modal: ViewOrderModal,
	},
];

export default itemMenu;
