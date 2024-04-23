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

const createCategoryModalModel: InputData<DataType>[] = [
	{
		sectionTitle: 'Details',
		name: 'name',
		label: 'Category Name',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'description',
		label: 'Description',
		isRequired: false,
		type: 'textarea',
	},
	{
		name: 'isFeatured',
		label: 'Is Featured',
		isRequired: false,
		type: 'checkbox',
		endOfSection: true,
	},
];

export default createCategoryModalModel;
