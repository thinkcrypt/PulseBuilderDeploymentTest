import { TableObjectProps } from '@/components/library/types';

const items = [];

const data: TableObjectProps = {
	title: 'Employees',
	path: 'employees',
	button: {
		title: 'Add Employee',
		path: '/employees/create',
	},

	menu: [
		{
			title: 'Edit',
			type: 'edit',
		},
		{
			title: 'View',
			type: 'view',
		},
		{
			title: 'Delete',
			type: 'delete',
		},
	],
	data: [
		{
			title: 'Name',
			sort: 'name',
			dataKey: 'name',
			default: true,
		},
		{
			title: 'ID',
			dataKey: 'employeeId',
			default: true,
		},

		{
			title: 'Email',
			dataKey: 'email',
			default: true,
		},
		{
			title: 'Phone',
			dataKey: 'phone',
			default: true,
		},
		{
			title: 'Role',
			sort: 'role',
			dataKey: 'role',
			default: true,
		},

		{
			title: 'Created',
			sort: '-createdAt',
			dataKey: 'createdAt',
			default: true,
			type: 'date',
		},
		{ title: '...', type: 'menu', dataKey: 'name' },
	],
};
export default data;
