'use client';

import {
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	SliderMark,
	InputProps,
	SliderProps,
	SliderMarkProps,
} from '@chakra-ui/react';

import React, { ReactNode, useState } from 'react';

import { FormControl } from '../../../';

const WIDTH = '300px';
const MAX_H = '200px';

type VDataMenuProps = InputProps &
	any & {
		label: string;
		value: any;
		isRequired?: boolean;
		placeholder?: string;
		helper?: string;
		hideNew?: boolean;
		unselect?: boolean;
	};

const BLineHeight: React.FC<VDataMenuProps> = ({
	label,
	isRequired,
	placeholder,
	value,
	helper,
	hideNew = false,
	type = 'value',
	unselect = true,
	...props
}) => {
	const [sliderValue, setSliderValue] = React.useState(1.15);

	return (
		<FormControl
			isRequired={isRequired}
			label={label}
			helper={helper}
			h='72px'>
			<Slider
				min={80}
				max={250}
				value={value ? value * 100 : 100}
				step={5}
				onChange={val =>
					props?.onChange({
						target: {
							name: props.name,
							value: val / 100,
						},
					})
				}
				// onChange={val => setSliderValue(val)}
			>
				<SliderMark
					value={100}
					{...labelStyles}>
					1
				</SliderMark>
				<SliderMark
					value={115}
					{...labelStyles}>
					1.15
				</SliderMark>
				<SliderMark
					value={150}
					{...labelStyles}>
					1.5
				</SliderMark>
				<SliderMark
					value={170}
					{...labelStyles}>
					1.7
				</SliderMark>
				<SliderMark
					value={200}
					{...labelStyles}>
					2
				</SliderMark>
				<SliderMark
					value={220}
					{...labelStyles}>
					2.2
				</SliderMark>

				<SliderMark
					value={value * 100}
					{...toolTipStyle}>
					{value}
				</SliderMark>

				<SliderTrack bg='#888'>
					<SliderFilledTrack bg='brand.500' />
				</SliderTrack>
				<SliderThumb boxSize={6} />
			</Slider>
		</FormControl>
	);
};

const labelStyles: any = {
	mt: '2',
	ml: '0',
	fontSize: 'sm',
	fontWeight: '600',
};

const toolTipStyle: any = {
	borderRadius: '12px',
	mt: '-12',
	ml: '0',
	px: 2,
	py: 1,
	fontSize: '12px',
	fontWeight: '600',
	textAlign: 'center',
	bg: 'brand.500',
	color: 'white',
	_dark: {
		bg: 'whitesmoke',
		color: 'brand.500',
	},
};

export default BLineHeight;
