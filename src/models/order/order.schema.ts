//

const schema = {
	total: {
		label: 'Total Price',
		type: 'number',
		displayInTable: true,
	},
	vat: {
		label: 'VAT',
		type: 'number',
		displayInTable: true,
	},
	subTotal: {
		label: 'Sub Total',
		type: 'number',
		default: true,
		displayInTable: true,
	},
	dueAmount: {
		label: 'Due Amount',
		type: 'number',
		displayInTable: true,
	},
	isPaid: {
		label: 'Is Paid',
		type: 'checkbox',
		displayInTable: true,
		colorScheme: (isPaid: boolean) => (isPaid ? 'green' : 'red'),
	},
	coupon: {
		label: 'Coupon',
		type: 'string',
		displayInTable: true,
	},
	address: {
		label: 'Address',
		type: 'object',
	},
	items: {
		label: 'Items',
		type: 'array',
		displayInTable: true,
	},
	totalItems: {
		label: 'Total Items',
		type: 'number',
		displayInTable: true,
		default: true,
	},
	status: {
		label: 'Delivery Status',
		type: 'text',
		displayInTable: true,
		default: true,
	},
	customer: {
		label: 'Customer',
		type: 'text',
		displayInTable: true,
		default: true,
		tableKey: 'customer.name',
	},
};

export default schema;
