'use client';
import React, { useState, ChangeEvent, FC } from 'react';

import {
	Button,
	Flex,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverTrigger,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import Column from '../../../../containers/Column';
import PopoverContainer, { PopoverHeader } from '@/app/_popover/PopoverContainer';
import FilterSelect from '../../../utils/inputs/FilterSelect';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { applyFilters } from '@/store/slices/tableSlice';
import InTheLast from './InTheLast';
import DatePicker from './DatePicker';
import BetweenDates from './BetweenDates';
import Filter from '../Filter';

type DateFilterProps = {
	field: string;
	title?: string;
	label?: string;
};

const DateFilter: FC<DateFilterProps> = ({ title, field, label }) => {
	const arrow = useColorModeValue('menu.light', 'menu.dark');
	const { onOpen, onClose, isOpen } = useDisclosure();
	const dispatch = useAppDispatch();
	const { filters } = useAppSelector((state: any) => state.table);

	const [display, setDisplay] = useState<string | undefined>();
	const [value, setValue] = useState<string>('');
	const [operator, setOperator] = useState<string>('last');
	const [persistOperator, setPersistOperator] = useState<string>('last');

	const ifFieldExists = (): boolean => {
		return Object.keys(filters).some(key => key.startsWith(field));
	};

	const handleOperatorChange = (e: ChangeEvent<HTMLSelectElement>): void => {
		setOperator(e.target.value);
		setValue('');
	};

	const reset = (): void => {
		setOperator(persistOperator);
	};

	const open = (): void => {
		const displayValues: any = {
			last: `last ${value}`,
			eq: `${value}`,
			btwn: `between ${value}`,
			gte: `on or after ${value}`,
			lte: `before ${value}`,
		};

		if (value !== '' || operator !== 'last') setDisplay(displayValues[operator]);
		else setDisplay(undefined);

		onOpen();
	};

	const close = (): void => {
		reset();
		onClose();
	};

	const handleClick = (): void => {
		const operatorValue = operator === 'eq' ? field : `${field}_${operator}`;
		setPersistOperator(() => operator);

		dispatch(
			applyFilters({
				key: operatorValue,
				value: value,
			})
		);

		onClose();
	};

	return (
		<Popover onOpen={open} onClose={close} isOpen={isOpen}>
			<PopoverTrigger>
				<Flex>
					<Filter>
						{label} {ifFieldExists() && display}
					</Filter>
				</Flex>
			</PopoverTrigger>
			<PopoverContainer>
				<PopoverArrow bg={arrow} />
				<PopoverHeader>{title}</PopoverHeader>
				<PopoverBody>
					<Column gap={3} pb={1}>
						<FilterSelect value={operator} onChange={handleOperatorChange}>
							<option value='last'>in the last</option>
							<option value='eq'>is equal to</option>
							<option value='btwn'>is between</option>
							<option value='gte'>is on or after</option>
							<option value='lte'>is before</option>
						</FilterSelect>
						{operator === 'last' && <InTheLast setVal={setValue} />}
						{operator === 'eq' && <DatePicker setVal={setValue} />}
						{operator === 'btwn' && <BetweenDates setVal={setValue} />}
						{operator === 'gte' && <DatePicker setVal={setValue} />}
						{operator === 'lte' && <DatePicker setVal={setValue} />}

						<Button size='sm' onClick={handleClick}>
							Apply
						</Button>
					</Column>
				</PopoverBody>
			</PopoverContainer>
		</Popover>
	);
};

export default DateFilter;
