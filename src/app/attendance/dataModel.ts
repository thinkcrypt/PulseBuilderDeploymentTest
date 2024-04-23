import { TableObjectProps } from '@/components/library/types';

const items = [];

const data: TableObjectProps = {
	title: 'Attendance',
	path: 'attendances',
	// button: {
	// 	title: 'Add Employee',
	// 	path: '/employees/create',
	// },

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
			title: 'Employee Name',
			sort: 'employee',
			dataKey: 'employee.name',
			default: true,
		},
		{
			title: 'Date',
			dataKey: 'date',
			default: true,
			type: 'date-only',
		},

		{
			title: 'Start Time',
			dataKey: 'start',
			default: true,
			type: 'time',
		},
		{
			title: 'End Time',
			dataKey: 'end',
			default: true,
			type: 'time',
		},
		{
			title: 'Hours',
			sort: 'hours',
			dataKey: 'hours',
			default: true,
		},

		{
			title: 'Is Late',
			sort: 'lateCheckIn',
			dataKey: 'lateCheckIn',
			default: true,
			type: 'boolean',
		},

		{
			title: 'Early Checkout',
			sort: 'earlyCheckout',
			dataKey: 'earlyCheckout',
			default: true,
			type: 'boolean',
		},

		{
			title: 'Half Day',
			sort: 'halfDay',
			dataKey: 'halfDay',
			type: 'boolean',
		},

		{
			title: 'Completed',
			sort: 'completed',
			dataKey: 'completed',
			type: 'boolean',
		},

		{
			title: 'Status',
			sort: 'status',
			dataKey: 'status',
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
