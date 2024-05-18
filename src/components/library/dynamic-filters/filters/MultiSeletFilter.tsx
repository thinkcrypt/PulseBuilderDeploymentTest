'use client';
import React, { FC, useState } from 'react';
import {
	PopModal,
	PopModalHeader,
	PopModalBody,
	PopModalCloseButton,
} from '../../tablev2/table-components/pop-modals';
import { Checkbox, Flex, PopoverTrigger, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import Column from '../../../containers/Column';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { applyFilters } from '@/store/slices/tableSlice';
import Filter from './Filter';
import FilterInput from '../../utils/inputs/FilterInput';
import useIsMobile from '../../hooks/useIsMobile';

type FilterProps = {
	title: string;
	field: string;
	label?: string;
	options: {
		value: string;
		label: string;
	}[];
};

const MultiSelectFilter: FC<FilterProps> = ({ title, field, options, label }) => {
	const arrow = useColorModeValue('menu.light', 'menu.dark');
	const { onOpen, onClose, isOpen } = useDisclosure();
	const dispatch = useAppDispatch();
	const { filters } = useAppSelector((state: any) => state.table);

	const [val, setVal] = useState<string[]>([]);
	const [search, setSearch] = useState<string>('');

	const ifFieldExists = (): boolean => {
		return Object.keys(filters).some(key => key.startsWith(field));
	};

	const handleSearch = (e: any) => {
		setSearch(e.target.value);
	};

	const handleChange = (e: any) => {
		setVal(val => {
			if (val.includes(e.target.name)) {
				return val.filter(item => item !== e.target.name);
			} else {
				return [...val, e.target.name];
			}
		});
	};

	const open = () => {
		setVal(filters[field] ? filters[field].split(',') : []);
		onOpen();
	};
	const popClose = () => {
		setVal(filters[field] ? filters[field].split(',') : []);
		setSearch('');
		onClose();
	};
	const handleClick = () => {
		const arr = val;
		dispatch(
			applyFilters({
				key: field,
				value: val?.length > 0 ? arr.join(',') : '',
			})
		);
		close();
	};
	const isMobile = useIsMobile();

	const button = (
		<span>
			<Filter>
				{label} {ifFieldExists() && <span>| {filters[field]}</span>}
			</Filter>
		</span>
	);
	return (
		<PopModal
			handleClick={handleClick}
			isMobile={isMobile}
			onOpen={open}
			onClose={popClose}
			isOpen={isOpen}
			trigger={
				isMobile ? (
					<Flex onClick={onOpen}>{button}</Flex>
				) : (
					<PopoverTrigger>{button}</PopoverTrigger>
				)
			}>
			<PopModalHeader isMobile={isMobile}>{title}</PopModalHeader>
			<PopModalCloseButton isMobile={isMobile} />
			<PopModalBody isMobile={isMobile}>
				<FilterInput
					type='text'
					value={search}
					onChange={handleSearch}
				/>

				<Column
					maxH={{ base: 'auto', md: '180px' }}
					overflowY='scroll'
					gap={2}>
					{options
						.filter(option => option.label.toLowerCase().includes(search.toLowerCase()))
						.map((option, i) => (
							<Checkbox
								isChecked={val.includes(option.value) ? true : false}
								onChange={handleChange}
								name={option.value}
								borderRadius='md'
								size={{ base: 'lg', md: 'sm' }}
								iconSize={20}
								fontSize='10px'
								colorScheme='brand'
								key={i}>
								{option.label}
							</Checkbox>
						))}
				</Column>
			</PopModalBody>
		</PopModal>
	);
};

export default MultiSelectFilter;
