import { Handler } from './';

const handleImage = ({
	e,
	dataKey,
	formData,
	setFormData,
	setChangedData,
}: Handler & { dataKey: string }) => {
	setChangedData((prevState: any) => ({ ...prevState, [dataKey]: e }));
	setFormData({ ...formData, [dataKey]: e });
};

export default handleImage;
