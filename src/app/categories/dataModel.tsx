import { TableObjectProps } from '@/components/library';
import viewDataModel from './viewDataModel';
import editModel from './create/dataModel';

const data: TableObjectProps = {
	title: 'Categories',
	path: 'categories',
	isModal: true,
	createModel: editModel,

	button: {
		title: 'Add Category',
		path: '/categories/create',
	},
	menu: [
		{
			title: 'Edit',
			type: 'edit-modal',
			dataModel: editModel,
		},
		{
			title: 'View',
			type: 'view-modal',
			dataModel: viewDataModel,
		},
	],

	data: [
		{
			title: 'Name',
			dataKey: 'name',
			sort: 'name',
			default: true,
		},
		{ title: 'Priority', dataKey: 'priority', sort: 'priority', default: true, editable: true },

		{ title: 'isActive', dataKey: 'isActive', type: 'boolean', sort: 'isActive', default: true },
		{ title: 'Created', dataKey: 'createdAt', type: 'date', sort: 'createdAt' },
		{ title: '...', type: 'menu' },
	],
};

export default data;
