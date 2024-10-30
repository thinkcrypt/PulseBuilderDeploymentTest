'use client';
import React from 'react';
import { SelectProps } from '@chakra-ui/react';
import { FormControl, SelectContainer } from '../../';

import { createListCollection } from 'chakra3';

import {
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectRoot,
	SelectTrigger,
	SelectValueText,
} from '@/components/ui/select';

type InputContainerProps = SelectProps & {
	label: string;
	isRequired?: boolean;
	helper?: string;
	value: string | boolean;
	children: React.ReactNode;
	placeholder?: any;
};

const VSelect: React.FC<InputContainerProps> = ({
	label,
	isRequired,
	placeholder,
	value,
	helper,
	children,
	...props
}) => {
	return (
		<FormControl
			isRequired={isRequired}
			label={label}
			helper={helper}>
			{/* <SelectContainer
				value={value}
				{...props}>
				{children}
			</SelectContainer> */}
			<SelectRoot collection={frameworks}>
				<SelectLabel>{label}</SelectLabel>
				<SelectTrigger>
					<SelectValueText placeholder='Select movie' />
				</SelectTrigger>
				<SelectContent>
					{frameworks.items.map(movie => (
						<SelectItem
							item={movie}
							key={movie.value}>
							{movie.label}
						</SelectItem>
					))}
				</SelectContent>
			</SelectRoot>
		</FormControl>
	);
};

const frameworks = createListCollection({
	items: [
		{ label: 'React.js', value: 'react' },
		{ label: 'Vue.js', value: 'vue' },
		{ label: 'Angular', value: 'angular' },
		{ label: 'Svelte', value: 'svelte' },
	],
});

export default VSelect;
