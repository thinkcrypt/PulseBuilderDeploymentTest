import { useState, useCallback, useEffect } from 'react';

const useFormData = <T extends {}>(data: any[], updatedData?: any) => {
	const initialFormData = useCallback(() => {
		return data.reduce((acc: Partial<T>, curr: any) => {
			if (curr.type === 'tag' || curr.type === 'array' || curr.type === 'data-tag') {
				return { ...acc, [curr.name]: [] };
			} else {
				return { ...acc, [curr.name]: curr.type === 'switch' ? false : undefined };
			}
		}, {});
	}, [data]);

	const [formData, setFormData] = useState<T>(initialFormData);

	const updateFormData = (newData: Partial<T>) => {
		const formattedData = Object.fromEntries(
			Object.entries(newData)
				.filter(
					([key]) => key in formData || Object.keys(formData).some(k => k.startsWith(key + '.'))
				)

				.map(([key, value]) => {
					if (key.includes('.')) {
						const [parent, child] = key.split('.');
						return [parent, { ...((formData as any)[parent] || {}), [child]: value }];
					}
					if (typeof value === 'boolean') {
						return [key, value];
					} else if (
						typeof value === 'string' &&
						value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/)
					) {
						const date = new Date(value);
						const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
							2,
							'0'
						)}-${String(date.getDate()).padStart(2, '0')}`;
						return [key, formattedDate];
					}
					return [key, value];
				})
		);
		setFormData(prevState => ({ ...prevState, ...formattedData }));
	};

	useEffect(() => {
		if (updatedData) {
			updateFormData(updatedData);
		}
	}, [updatedData]);

	return [formData, setFormData];
};

export default useFormData;
