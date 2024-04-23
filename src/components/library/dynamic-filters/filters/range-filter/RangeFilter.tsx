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
import Filter from '../Filter';
import FilterInput from '@/components/library/utils/inputs/FilterInput';
import BetweenValues from './BetweenValues';

type DateFilterProps = {
	field: string;
	title?: string;
	label?: string;
};

const RangeFilter: FC<DateFilterProps> = ({ title, field, label }) => {
	const arrow = useColorModeValue('menu.light', 'menu.dark');
	const { onOpen, onClose, isOpen } = useDisclosure();
	const dispatch = useAppDispatch();
	const { filters } = useAppSelector((state: any) => state.table);

	const [display, setDisplay] = useState<string | undefined>();
	const [value, setValue] = useState<number | undefined | string>();
	const [operator, setOperator] = useState<string>('eq');
	const [persistOperator, setPersistOperator] = useState<string>('eq');

	const ifFieldExists = (): boolean => {
		return Object.keys(filters).some(key => key.startsWith(field));
	};

	const handleOperatorChange = (e: ChangeEvent<HTMLSelectElement>): void => {
		setOperator(e.target.value);
		setValue(undefined);
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

		if (value || operator !== 'eq') setDisplay(displayValues[operator]);
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
							<option value='eq'>is equal to</option>
							<option value='btwn'>is between</option>
							<option value='gte'>is greater than</option>
							<option value='lte'>is less than</option>
						</FilterSelect>

						{operator === 'eq' && (
							<FilterInput type='number' value={value} onChange={e => setValue(e.target.value)} />
						)}
						{operator === 'btwn' && <BetweenValues setVal={setValue} />}
						{operator === 'gte' && (
							<FilterInput type='number' value={value} onChange={e => setValue(e.target.value)} />
						)}
						{operator === 'lte' && (
							<FilterInput type='number' value={value} onChange={e => setValue(e.target.value)} />
						)}

						<Button size='sm' onClick={handleClick}>
							Apply
						</Button>
					</Column>
				</PopoverBody>
			</PopoverContainer>
		</Popover>
	);
};

export default RangeFilter;
