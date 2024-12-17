'use client';

import { Button, useDisclosure, Text, Checkbox, Grid, Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import {
	formatFieldName,
	useAppSelector,
	MenuModal,
	MenuModalHeader,
	MenuModalBody,
	MenuModalCloseButton,
	MenuModalFooter,
	DiscardButton,
	Icon,
} from '../../../';
import { useExportMutation } from '@/components/library/store/services/commonApi';

const ExportModal = ({ path, ids }: { path: string; ids?: string[] }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { fields = [], preferences = [] } = useAppSelector(state => state.table);
	const [selected, setSelected] = useState<string[]>([]);

	const [trigger, result] = useExportMutation();

	const [type, setType] = useState('csv');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		trigger({
			path: path,
			body: selected,
			type: type,
		});
	};

	const closeModal = () => {
		setType('csv');
		setSelected(preferences);
		onClose();
	};

	useEffect(() => {
		setSelected(preferences);
	}, [preferences]);

	useEffect(() => {
		if (result?.isSuccess) {
			closeModal();
		}
	}, [result]);

	const handleCheckboxChange = React.useCallback((e: any, field: any) => {
		if (e.target.checked) {
			setSelected(prevSelected => [...prevSelected, field]);
		} else {
			setSelected(prevSelected => prevSelected.filter(item => item !== field));
		}
	}, []);

	const checkboxes = fields.map((field: string, i: number) => (
		<Checkbox
			size='md'
			fontWeight='500'
			colorScheme='brand'
			key={i}
			isChecked={selected?.includes(field)}
			onChange={e => handleCheckboxChange(e, field)}>
			{formatFieldName(field)}
		</Checkbox>
	));

	return (
		<>
			<Button
				onClick={onOpen}
				size='sm'
				pl={3}
				variant='white'
				leftIcon={<Icon name='export-doc' />}>
				Export
			</Button>

			<MenuModal
				isOpen={isOpen}
				onClose={closeModal}>
				<MenuModalHeader>Select Fields</MenuModalHeader>
				<MenuModalCloseButton />
				<MenuModalBody>
					<Grid
						py={2}
						gridTemplateColumns={{ base: '1fr 1fr', md: '1fr 1fr' }}
						gap={4}
						rowGap={4}>
						{checkboxes}
					</Grid>
					<Grid
						alignItems='center'
						py={2}
						gridTemplateColumns={{ base: '1fr 1fr', md: '1fr 1fr' }}
						gap={4}
						rowGap={4}>
						<Text>Select Export Type</Text>
						<Select
							size='sm'
							value={type}
							onChange={(e: any) => setType(e.target.value)}>
							<option value='csv'>CSV</option>
							<option value='pdf'>Pdf</option>
						</Select>
					</Grid>
				</MenuModalBody>
				<MenuModalFooter>
					{selected?.length < 2 ? (
						<Text color='red'>Please select at least 2 fields</Text>
					) : selected?.length > 5 && type == 'pdf' ? (
						<Text color='red'>You can only export up to 5 fields to PDF</Text>
					) : (
						<>
							<DiscardButton
								mr={2}
								onClick={closeModal}>
								Discard
							</DiscardButton>
							<Button
								size='xs'
								onClick={handleSubmit}
								isLoading={result?.isLoading}>
								Export
							</Button>
						</>
					)}
				</MenuModalFooter>
			</MenuModal>
		</>
	);
};

export default ExportModal;
