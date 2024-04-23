import React, { ChangeEvent } from 'react';
import { Grid } from '@chakra-ui/react';
import FilterInput from '../../../utils/inputs/FilterInput';
import Icon from '@/components/library/icon/Icon';

const DatePicker = ({ setVal }: { setVal: (val: string) => void }) => {
	const [value, setValue] = React.useState<any>();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newDAte = e.target.value;
		setValue(newDAte);
		setVal(newDAte.toString());
	};

	return (
		<Grid alignItems='center' gap={2} px={1} gridTemplateColumns='.6fr 2fr 4fr 2fr'>
			<Icon name='arrow' />
			<FilterInput date value={value} onChange={handleChange} />
		</Grid>
	);
};

export default DatePicker;
