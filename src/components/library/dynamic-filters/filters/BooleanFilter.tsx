'use client';

import { useState, ChangeEvent, FC } from 'react';

import { Flex, PopoverTrigger, useDisclosure } from '@chakra-ui/react';
import { applyFilters } from '@/store/slices/tableSlice';

import {
	PopModal,
	PopModalHeader,
	PopModalBody,
	PopModalCloseButton,
	useIsMobile,
	useAppDispatch,
	useAppSelector,
	Filter,
	FilterSelect,
} from '../../';

type IsActiveFilterProps = {
	title: string;
	field: string;
	label?: string;
};

const BooleanFilter: FC<IsActiveFilterProps> = ({ title, field, label }) => {
	const { onOpen, onClose, isOpen } = useDisclosure();
	const dispatch = useAppDispatch();
	const { filters } = useAppSelector((state: any) => state.table);

	const [val, setVal] = useState<string | undefined>(filters[field] || '');
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setVal(e.target.value);
	};
	const open = () => {
		setVal(filters[field] || '');
		onOpen();
	};
	const popClose = () => {
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

	const ifFieldExists = (): boolean => {
		return Object.keys(filters).some(key => key.startsWith(field));
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
				<FilterSelect
					value={val}
					onChange={handleChange}>
					<option
						value=''
						disabled>
						Select an option
					</option>
					<option value='true'>True</option>
					<option value='false'>False</option>
				</FilterSelect>
			</PopModalBody>
		</PopModal>
	);
};

export default BooleanFilter;
