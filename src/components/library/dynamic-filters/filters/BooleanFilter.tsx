'use client';
import React from 'react';
import { Button, Flex, PopoverTrigger, useDisclosure } from '@chakra-ui/react';
import Column from '../../../containers/Column';
import FilterSelect from '../../utils/inputs/FilterSelect';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { applyFilters } from '@/store/slices/tableSlice';
import Filter from './Filter';
import PopModal from '../../tablev2/table-components/pop-modals/PopModal';
import PopModalHeader from '../../tablev2/table-components/pop-modals/PopModalHeader';
import PopModalBody from '../../tablev2/table-components/pop-modals/PopModalBody';
import PopModalCloseButton from '../../tablev2/table-components/pop-modals/PopModalCloseButton';
import PopModalFooter from '../../tablev2/table-components/pop-modals/PopModalFooter';
import useIsMobile from '../../hooks/useIsMobile';

type IsActiveFilterProps = {
	title: string;
	field: string;
	label?: string;
};

const BooleanFilter: React.FC<IsActiveFilterProps> = ({ title, field, label }) => {
	const { onOpen, onClose, isOpen } = useDisclosure();
	const dispatch = useAppDispatch();
	const { filters } = useAppSelector((state: any) => state.table);

	const [val, setVal] = React.useState<string | undefined>(filters[field] || '');
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
						<option value='true'>True</option>
						<option value='false'>False</option>
					</FilterSelect>
					<PopModalFooter isMobile={isMobile}>
						<Button
							alignSelf='flex-end'
							w='full'
							size='sm'
							onClick={handleClick}>
							Apply
						</Button>
					</PopModalFooter>
				</Column>
			</PopModalBody>
		</PopModal>
	);
};

export default BooleanFilter;
