'use client';
import React from 'react';
import {
	Button,
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

type IsActiveFilterProps = {
	trigger: React.ReactNode;
	value: string;
	onChange: any;
};

const IsActiveFilter: React.FC<IsActiveFilterProps> = ({ trigger, value, onChange }) => {
	const arrow = useColorModeValue('menu.light', 'menu.dark');
	const { onOpen, onClose, isOpen } = useDisclosure();

	const [val, setVal] = React.useState<string | undefined>(value);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setVal(e.target.value);
	};
	const open = () => {
		setVal(value);
		onOpen();
	};

	const close = () => {
		setVal('');
		onClose();
	};

	const handleClick = () => {
		onChange(val);
		close();
	};
	return (
		<Popover
			onOpen={open}
			onClose={close}
			isOpen={isOpen}>
			<PopoverTrigger>{trigger}</PopoverTrigger>
			<PopoverContainer>
				<PopoverArrow bg={arrow} />
				<PopoverHeader>Filter by status</PopoverHeader>
				<PopoverBody>
					<Column
						gap={3}
						pb={1}>
						<FilterSelect
							value={val}
							onChange={handleChange}>
							<option value='true'>True</option>
							<option value='false'>False</option>
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

export default IsActiveFilter;
