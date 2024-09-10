import productUnitOptions from '../util/productUnitOptions';

const schema = {
	image: {
		label: 'Image',
		type: 'image',
	},
	name: {
		isRequired: true,
		type: 'text',
		label: 'Name',
		inputLabel: 'Product Name',
		sort: true,
		tableType: 'image-text',
		imageKey: 'image',
		default: true,
		displayInTable: true,
	},
	category: {
		label: 'Category',
		isRequired: true,
		type: 'data-menu',
		model: 'categories',
		displayInTable: true,
		tableType: 'text',
		tableKey: 'category.name',
		//dataModel: editCategoriesModel,
	},
	price: {
		label: 'Price',
		required: true,
		displayInTable: true,
		default: true,
		type: 'number',
		sort: true,
	},
	vat: {
		label: 'Vat in %',
		type: 'number',
		//displayInTable: true,
	},

	shortDescription: {
		label: 'Short Description',
		type: 'textarea',
	},
	description: {
		label: 'Description',
		type: 'textarea',
	},
	unitValue: {
		type: 'number',
		label: 'Unit',
	},
	unit: {
		label: 'Product Unit',
		placeholder: 'e.g. pc, kg, g, l, ml',
		type: 'select',
		options: productUnitOptions,
	},
	sku: {
		label: 'SKU (Stock Keeping Unit)',
		tableLabel: 'SKU',
		type: 'text',
		displayInTable: true,
	},
	slug: {
		label: 'Slug',
		type: 'slug',
		tableType: 'text',
		displayInTable: true,
		required: true,
		sort: true,
	},
	isActive: {
		label: 'Is Active',
		type: 'checkbox',
		displayInTable: true,
		colorScheme: (isActive: boolean) => (isActive ? 'green' : 'red'),
	},

	images: {
		label: 'Images',
		type: 'image-array',
	},

	collection: {
		label: 'Add to collections',
		type: 'data-tag',
		model: 'collections',
	},

	isFeatured: {
		label: 'Is Featured',
		type: 'checkbox',
		displayInTable: true,
		colorScheme: (isActive: boolean) => (isActive ? 'green' : 'red'),
	},
	isDiscount: {
		label: 'Is Discount',
		type: 'checkbox',
		colorScheme: (isActive: boolean) => (isActive ? 'green' : 'red'),
	},
	discount: {
		label: 'Discount',
		isRequired: false,
		type: 'number',
		displayInTable: true,
	},

	barcode: {
		type: 'text',
		label: 'Barcode (ISBN, UPC, GTIN, etc.)',
		displayInTable: true,
		sort: true,
	},

	stock: {
		type: 'number',
		label: 'Stock',
		displayInTable: true,
		sort: true,
	},

	tags: {
		label: 'tags',
		isRequired: false,
		type: 'tag',
	},

	customAttributes: {
		label: 'Add Custom Attributes',
		isRequired: false,
		type: 'custom-attribute',
	},
	customSections: {
		label: 'Custom Sections',
		type: 'custom-section-array',
		isRequired: false,
	},

	faq: {
		label: 'Frequently Asked Questions',
		type: 'custom-section-array',
		isRequired: false,
	},
	createdAt: {
		label: 'Created At',
		type: 'date',
		showInTable: true,
		sort: true,
	},
};

export default schema;
