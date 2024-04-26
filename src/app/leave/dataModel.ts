import ApproveLeaveModal from '@/components/custom-modals/leave/ApproveLeaveModal';
import { TableObjectProps } from '@/components/library/types';

const items = [];

const data: TableObjectProps = {
	title: 'Leave',
	path: 'leave',
	// button: {
	// 	title: 'Add Employee',
	// 	path: '/employees/create',
	// },

	menu: [
		{
			title: 'View Application',
			type: 'custom',
			modal: ApproveLeaveModal,
		},
		// {
		// 	title: 'Edit',
		// 	type: 'edit',
		// },
		// {
		// 	title: 'View',
		// 	type: 'view',
		// },
		{
			title: 'Delete',
			type: 'delete',
		},
	],
	data: [
		{
			title: 'Employee',
			sort: 'employee',
			dataKey: 'employee.name',
			default: true,
		},
		{
			title: 'Leave Type',
			dataKey: 'leaveType',
			default: true,
		},

		{
			title: 'Start Date',
			dataKey: 'startDate',
			default: true,
			type: 'date-only',
			sort: 'startDate',
		},
		{
			title: 'End Date',
			dataKey: 'endDate',
			default: true,
			type: 'date-only',
			sort: 'endDate',
		},
		{
			title: 'Days',
			sort: 'days',
			dataKey: 'days',
			default: true,
		},

		{
			title: 'Status',
			sort: 'status',
			dataKey: 'status',
			default: true,
			type: 'tag',
			tagType: [
				{ value: 'approved', color: 'green' },
				{ value: 'pending', color: 'orange' },
				{ value: 'rejected', color: 'red' },
			],
		},

		{
			title: 'Applied On',
			sort: 'appliedOn',
			dataKey: 'appliedOn',
			default: true,
			type: 'date-only',
		},

		{
			title: 'Created',
			sort: '-createdAt',
			dataKey: 'createdAt',

			type: 'date',
		},
		{ title: '...', type: 'menu', dataKey: 'name' },
	],
};
export default data;
