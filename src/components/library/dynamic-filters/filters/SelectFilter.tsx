'use client';
import React, { ChangeEvent, FC, useState } from 'react';
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
import Column from '../../../containers/Column';
import PopoverContainer, { PopoverHeader } from '@/app/_popover/PopoverContainer';
import FilterSelect from '../../utils/inputs/FilterSelect';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { applyFilters } from '@/store/slices/tableSlice';
import Filter from './Filter';

type FilterProps = {
	title: string;
	field: string;
	label?: string;
	options: {
		value: string;
		label: string;
	}[];
};

const SelectFilter: FC<FilterProps> = ({ title, field, options, label }) => {
	const arrow = useColorModeValue('menu.light', 'menu.dark');
	const { onOpen, onClose, isOpen } = useDisclosure();
	const dispatch = useAppDispatch();
	const { filters } = useAppSelector((state: any) => state.table);

	const [val, setVal] = useState<string | undefined>(filters[field] || '');

	const ifFieldExists = (): boolean => {
		return Object.keys(filters).some(key => key.startsWith(field));
	};

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setVal(e.target.value);
	};
	const open = () => {
		setVal(filters[field] || '');
		onOpen();
	};
	const close = () => {
		setVal('');
		onClose();
	};
	const handleClick = () => {
		dispatch(
			applyFilters({
				key: field,
				value: val,
			})
		);
		close();
	};
	return (
		<Popover
			onOpen={open}
			onClose={close}
			isOpen={isOpen}>
			<PopoverTrigger>
				<Flex>
					<Filter>
						{label || field} {ifFieldExists() && <span>| {filters[field]}</span>}
					</Filter>
				</Flex>
			</PopoverTrigger>
			<PopoverContainer>
				<PopoverArrow bg={arrow} />
				<PopoverHeader>{title}</PopoverHeader>
				<PopoverBody>
					<Column
						gap={3}
						pb={1}>
						<FilterSelect
							value={val}
							onChange={handleChange}>
							<option
								value=''
								disabled>
								Select an option
							</option>
							{options.map((option, i) => (
								<option
									key={i}
									value={option.value}>
									{option.label}
								</option>
							))}
						</FilterSelect>
						<Button
							size='sm'
							onClick={handleClick}>
							Apply
						</Button>
					</Column>
				</PopoverBody>
			</PopoverContainer>
		</Popover>
	);
};

export default SelectFilter;
