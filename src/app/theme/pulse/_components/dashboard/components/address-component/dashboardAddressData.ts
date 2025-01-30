export const dashboardAddressFields = [
	{
		label: 'Full Name',
		type: 'text',
		placeholder: 'Recipient Name',
		fieldKey: 'name',
		isRequired: true,
	},

	{
		label: 'Phone',
		type: 'text',
		placeholder: 'Recipient Phone',
		fieldKey: 'phone',
		isRequired: true,
	},
	{
		label: 'Email',
		type: 'email',
		placeholder: 'Recipient Email',
		fieldKey: 'email',
		isRequired: true,
	},
	{
		label: 'Street Address',
		type: 'textarea',
		placeholder: 'Street Address',
		fieldKey: 'street',
		isRequired: true,
	},
	{
		label: 'City',
		type: 'text',
		placeholder: 'City',
		fieldKey: 'city',
		isRequired: true,
	},
	{
		label: 'State',
		type: 'text',
		placeholder: 'State',
		fieldKey: 'state',
		isRequired: false,
	},
	{
		label: 'Country',
		type: 'text',
		placeholder: 'Country',
		fieldKey: 'country',
		isRequired: false,
	},
	{
		label: 'Post Code',
		type: 'number',
		placeholder: 'Post Code',
		fieldKey: 'postalCode',
		isRequired: true,
	},
];
