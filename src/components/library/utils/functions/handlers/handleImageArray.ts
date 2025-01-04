import { Handler } from './';

// Helper function to safely get nested value
const getNestedValue = (obj: any, path: string) => {
	return path.split('.').reduce((acc, part) => {
		return acc && acc[part] !== undefined ? acc[part] : [];
	}, obj);
};

// Helper function to set nested value
const setNestedValue = (obj: any, path: string, value: any) => {
	const pathArray = path.split('.');
	const lastKey = pathArray.pop()!;

	// Build the nested structure if it doesn't exist
	const target = pathArray.reduce((acc, part) => {
		if (!(part in acc)) {
			acc[part] = {};
		}
		return acc[part];
	}, obj);

	target[lastKey] = value;
	return obj;
};

const handleImageArray = ({
	e,
	type,
	dataKey,
	formData,
	setFormData,
	setChangedData,
}: Handler & { dataKey: string; type?: string }) => {
	// Helper function to handle nested path updates
	const updateNestedState = (prevState: any) => {
		const currentArray = getNestedValue(prevState, dataKey);

		let updatedData;
		if (type === 'delete') {
			updatedData = Array.isArray(currentArray)
				? currentArray.filter((item: any) => item !== e)
				: [];
		} else {
			updatedData = Array.isArray(currentArray)
				? currentArray.includes(e)
					? currentArray
					: [...currentArray, e]
				: [e];
		}

		// Create a new state object and update the nested path
		const newState = { ...prevState };
		setNestedValue(newState, dataKey, updatedData);
		return newState;
	};

	// Update both formData and changedData states
	setChangedData((prevState: any) => updateNestedState(prevState));
	setFormData((prevState: any) => updateNestedState(prevState));
};

export default handleImageArray;
