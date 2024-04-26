import { InputData } from '@/components/library/types';

export type DataType = {
	name: string | undefined;
	isFeatured: boolean;
	image?: string | undefined;
	meta?: {
		title: string;
		description: string;
	};
	[key: string]: any;
};

const dataFields: InputData<DataType>[] = [
	{
		sectionTitle: 'Leave Details',
		name: 'employee',
		label: 'Your Email',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'leaveType',
		label: 'Leave Type',
		isRequired: true,
		placeholder: 'Select Leave Type',
		type: 'select',
		options: [
			{
				label: 'Sick Leave',
				value: 'sick',
			},
			{
				label: 'Annual Leave',
				value: 'annual',
			},
			{
				label: 'Casual Leave',
				value: 'casual',
			},
			{
				label: 'Half Day',
				value: 'hd',
			},
			{
				label: 'Maternity Leave',
				value: 'maternity',
			},
			{
				label: 'Unpaid Leave',
				value: 'ul',
			},
		],
	},
	{
		name: 'reason',
		label: 'Leave Reason',
		isRequired: true,
		type: 'textarea',
	},
	{
		startOfSection: true,
		sectionTitle: 'Leave Date & Time',
		name: 'startDate',
		label: 'Start Date',
		isRequired: true,
		type: 'date',
	},
	{
		name: 'endDate',
		label: 'End Date',
		isRequired: true,
		type: 'date',
	},
	// {
	// 	name: 'days',
	// 	label: 'Total Days',
	// 	type: 'number',
	// },
];

export default dataFields;
