type GetValue = {
	dataKey: string;
	type: any;
	data: any;
};

const getValue = ({ dataKey, type, data }: GetValue): any => {
	if (!data) return;
	// Split the dataKey by '.' to determine if it's nested
	const keys = dataKey?.split('.');
	// Determine the appropriate value based on whether the key is nested
	let value = 'n/a';
	if (keys?.length === 1) {
		// Single level key, directly access the value
		value = type === 'date' ? new Date(data[dataKey]) : data[dataKey];
	} else if (keys?.length === 2) {
		// Nested key, access the nested value
		const [parentKey, childKey] = keys;
		value = type === 'date' ? new Date(data[parentKey]?.[childKey]) : data[parentKey]?.[childKey];
	}
	return value;
};

export default getValue;
