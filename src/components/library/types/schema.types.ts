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
};

type Schema = {
	[key: string]: CommonProps;
};

export default Schema;
