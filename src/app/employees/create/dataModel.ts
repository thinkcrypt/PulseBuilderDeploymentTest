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
		sectionTitle: 'Employee Details',
		name: 'name',
		label: 'Employee Name',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'employeeId',
		label: 'Employee Id',
		type: 'text',
	},
	{
		name: 'email',
		label: 'Employee Email',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'role',
		label: 'Employee Role',
		isRequired: true,
		type: 'text',
	},
	{
		sectionTitle: 'Phone',
		name: 'phone',
		label: 'Employee Phone',
		type: 'text',
	},
	{
		name: 'password',
		label: 'Create Password',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'confirm',
		label: 'Confirm Password',
		isRequired: true,
		type: 'text',
		endOfSection: true,
	},
];

export default dataFields;
