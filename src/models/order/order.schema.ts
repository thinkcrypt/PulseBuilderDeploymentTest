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
	origin: {
		label: 'Order From',
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
		tableType: 'tag',
		colorScheme: (status: string) => {
			if (status == 'pending') return 'blue';
			else if (status == 'completed') return 'green';
			else if (status == 'cancelled') return 'red';
			else if (status == 'order-placed') return 'purple';
			else return 'purple';
		},
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
