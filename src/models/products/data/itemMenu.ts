import schema from '../product.schema';
import { convertToViewFields, MenuItemProps } from '@/components/library';

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
	{
		title: 'View',
		type: 'view-modal',
		dataModel: convertToViewFields({ schema }),
	},
	{
		title: 'Make Copy',
		type: 'duplicate',
	},
	// {
	// 	title: 'Custom',
	// 	type: 'custom-modal',
	// 	modal: CustomModal,
	// },
];

export default itemMenu;
