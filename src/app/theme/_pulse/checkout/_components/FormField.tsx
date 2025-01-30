// import useColors from '@/components/library/hooks/useColors';
import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { FC } from 'react';
import useColors from '../../_core-components/hooks/useColors';

type FormFieldProps = {
	isRequired: boolean;
	type: string; // Supports both "text" and "textarea"
	label: string;
	value: string | number;
	placeholder?: string;
	onChange: (value: string | number) => void;
	basic: any;
	css: any;
};

const FormField: FC<FormFieldProps> = ({
	isRequired,
	type,
	label,
	value,
	placeholder,
	onChange,
	basic,
	css,
}) => {
	const colors = useColors();
	return (
		<FormControl isRequired={isRequired}>
			<FormLabel
				color={css?.cardFg || basic?.primaryTextColor}
				fontFamily={basic?.primaryFont}
				fontSize={css?.labelSize}
				fontWeight={css?.labelWeight}
			>
				{label}
			</FormLabel>
			{type === 'textarea' ? (
				<Textarea
					placeholder={placeholder}
					value={value}
					onChange={e => onChange(e.target.value)}
					border={`1px solid ${css?.border || '#000'}`}
					rows={5}
					color={css?.cardFg || basic?.primaryTextColor}
					fontFamily={basic?.primaryFont}
					fontSize={css?.labelSize}
					fontWeight={css?.labelWeight}
				/>
			) : (
				<Input
					type={type}
					placeholder={placeholder}
					value={value}
					border={`1px solid ${css?.border || '#000'}`}
					onChange={e =>
						onChange(type === 'number' ? +e.target.value : e.target.value)
					}
					color={css?.cardFg || basic?.primaryTextColor}
					fontFamily={basic?.primaryFont}
					fontSize={css?.labelSize}
					fontWeight={css?.labelWeight}
				/>
			)}
		</FormControl>
	);
};

export default FormField;
