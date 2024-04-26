import { InputProps, SelectProps, SwitchProps, TextareaProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import VInput from '../../../utils/inputs/VInput';
import VSelect from '../../../utils/inputs/VSelect';
import VSwitch from '../../../utils/inputs/VSwitch';
import VImage from '../../../utils/inputs/VImage';
import VTextarea from '@/components/library/utils/inputs/VTextarea';
import { InputDataType } from '@/components/library/types';
import VDataSelect from '@/components/library/utils/inputs/VDataSelect';
import VCheckbox from '@/components/library/utils/inputs/VCheckbox';
import ViewOnly from '@/components/library/utils/inputs/ViewOnly';
import VTags from '@/components/library/utils/inputs/VTags';
import VDataTags from '@/components/library/utils/inputs/VDataTags';
import VDataMenu from '@/components/library/utils/inputs/VDataMenu';

type Option = {
	label: string;
	value: string | number | boolean | readonly string[] | undefined;
};

type FormInputProps = InputProps &
	TextareaProps &
	SelectProps &
	SwitchProps & {
		label: string;
		value: any;
		isRequired: boolean;
		type: InputDataType;
		options?: Option[];
		model?: string;
		dataModel?: any;
	};

const FormInput: FC<FormInputProps> = ({
	isRequired,
	type = 'text',
	options,
	dataModel,
	...props
}) => {
	switch (type) {
		case 'image':
			return (
				<VImage
					isRequired={isRequired}
					onChange={props.onChange}
					{...props}
				/>
			);
		case 'select':
			return (
				<VSelect
					isRequired={isRequired}
					{...props}>
					<option
						value=''
						disabled
						selected>
						Select option
					</option>
					{options?.map((option: any, i: number) => (
						<option
							key={i}
							value={option.value}>
							{option.label}
						</option>
					))}
				</VSelect>
			);
		case 'switch':
			return (
				<VSwitch
					isRequired={isRequired}
					{...props}
				/>
			);
		case 'textarea' || 'nested-textarea':
			return (
				<VTextarea
					isRequired={isRequired}
					{...props}
				/>
			);
		case 'data-select':
			return (
				<VDataSelect
					isRequired={isRequired}
					model={props?.model || ''}
					{...props}
				/>
			);
		case 'checkbox':
			return (
				<VCheckbox
					isRequired={isRequired}
					{...props}
				/>
			);
		case 'data-menu':
			return (
				<VDataMenu
					dataModel={dataModel}
					isRequired={isRequired}
					model={props?.model || ''}
					{...props}
				/>
			);
		case 'view-only':
			return <ViewOnly {...props} />;
		case 'tag':
			return (
				<VTags
					type={type}
					isRequired={isRequired}
					{...props}
				/>
			);
		case 'data-tag':
			return (
				<VDataTags
					type={type}
					model={props?.model || ''}
					isRequired={isRequired}
					{...props}
				/>
			);
		default:
			return (
				<VInput
					type={type}
					isRequired={isRequired}
					{...props}
				/>
			);
	}
};

export default FormInput;
