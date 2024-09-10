import {
	convertToTableFields,
	convertToViewFields,
	createFormFields,
	TableObjectProps,
} from '@/components/library';
import schema from './product.schema';
import multiSelectMenu from './data/multiSelect';
import itemMenu from './data/itemMenu';

const layout = [
	{
		sectionTitle: 'Product Information',
		fields: ['image', 'name'],
	},
	{
		sectionTitle: 'Product Description',
		fields: [
			'category',
			['slug', 'stock'],
			'shortDescription',
			'tags',
			['price', 'vat'],
			['unitValue', 'unit'],
			['sku', 'barcode'],
			['isFeatured'],
		],
	},
	{
		sectionTitle: 'Detailed Description',
		fields: ['description'],
	},
	{
		sectionTitle: 'Custom Fields',
		fields: ['customAttributes', 'customSections'],
	},
	{
		sectionTitle: 'Frequently Asked Questions',
		fields: ['faq'],
	},
];

const tableLayout: any[] = [
	'name',
	'price',
	'category',
	'vat',
	'isActive',
	'slug',
	'sku',
	'isFeatured',
	'isDiscount',
	'discount',
	'createdAt',
	'faq',
];

const createProductFormFields = createFormFields({ schema, layout });
export const viewAllDataFields = convertToTableFields({ schema, fields: tableLayout });
export const viewPreviewFields = convertToViewFields({ schema });

const form = {
	type: 'add',
	title: 'Add New Product',
	path: 'products',
	fields: createProductFormFields,
};

const updateForm = {
	type: 'add',
	title: 'Update Product Details',
	path: 'products',
	fields: createProductFormFields,
};

const viewAll: TableObjectProps = {
	title: 'Products',
	path: 'products',
	// clickable: true,
	//toPath: '/items/edit',
	export: true,
	select: {
		show: true,
		menu: multiSelectMenu,
	},
	button: {
		title: 'Add Product',
		path: '/products/create',
	},
	menu: itemMenu,
	data: viewAllDataFields,
};

export { form as formTable, viewAll as viewAll, updateForm };
