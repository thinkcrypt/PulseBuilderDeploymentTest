import { InputData } from '@/components/library/types';
import createCategoryModalModel from '@/lib/dataModels/createCategory.model';

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
		sectionTitle: 'Product Image',
		name: 'image',
		label: 'Image',
		isRequired: false,
		type: 'image',
		endOfSection: true,
	},
	{
		sectionTitle: 'Details',
		name: 'name',
		label: 'Item Name',
		isRequired: true,
		type: 'text',
	},
	{
		name: 'description',
		label: 'Short Description',
		isRequired: false,
		type: 'textarea',
	},
	{
		name: 'longDescription',
		label: 'Description',
		isRequired: false,
		type: 'textarea',
	},
	{
		name: 'category',
		label: 'Product Category',
		isRequired: true,
		type: 'data-menu',
		span: 1,
		model: 'categories',
		dataModel: createCategoryModalModel,
	},
	{
		name: 'price',
		label: 'Price',
		isRequired: false,
		type: 'number',
	},
	{
		name: 'isDiscount',
		label: 'Discount',
		isRequired: false,
		type: 'switch',
	},
	{
		name: 'Discounted Price',
		label: 'discountPrice',
		isRequired: false,
		type: 'number',
	},

	// {
	// 	name: 'isFeatured',
	// 	label: 'Is Featured',
	// 	isRequired: false,
	// 	type: 'checkbox',
	// 	endOfSection: true,
	// },
];

export default dataFields;
