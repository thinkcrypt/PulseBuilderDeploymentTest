import { InputDataType, TableDataFieldType } from './data-types';

type CommonProps = {
	label: string;
	inputLabel?: string;
	type: InputDataType;
	isRequired?: boolean;
	sort?: boolean;
	tableType?: TableDataFieldType;
	imageKey?: string;
	default?: boolean;
	displayInTable?: boolean;
	model?: string;
	dataModel?: any;
	options?: { label: string; value: string }[];
	placeholder?: string;
	colorScheme?: any;
	renderCondition?: any;
	tableKey?: string;
	menuField?: string;
	value?: any;
	fetch?: (data: any) => {
		path: string;
		fields: { key: string; as: string }[];
		id: any;
	};
	isExcluded?: boolean;
};

type Schema = {
	[key: string]: CommonProps;
};

export default Schema;
