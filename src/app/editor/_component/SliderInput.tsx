import React, { FC } from 'react';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Text } from '@chakra-ui/react';

type SliderInputProps = {
	title: string;
	value: number;
	setValue: (value: number) => void;
	min?: number;
	max?: number;
};

const SliderInput: FC<SliderInputProps> = ({ title, value, setValue, min, max }) => {
	return (
		<Stack w='full'>
			<Text
				fontSize='13px'
				fontWeight='500'>
				{title}
			</Text>
			<Slider
				w='100%'
				size='lg'
				aria-label={title}
				defaultValue={value}
				min={min || 0}
				max={max || 30}
				h='42px'
				onChange={setValue}>
				<SliderTrack>
					<SliderFilledTrack
						bg='black'
						_dark={{ bg: 'container.light' }}
					/>
				</SliderTrack>
				<SliderThumb
					bg='black'
					_dark={{ bg: 'container.light' }}
				/>
			</Slider>
		</Stack>
	);
};

export default SliderInput;
