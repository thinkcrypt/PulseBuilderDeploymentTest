'use client';

import { Button, useDisclosure, Text, Checkbox, Grid, IconButton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import {
	Icon,
	useAppSelector,
	MenuModal,
	MenuModalHeader,
	MenuModalBody,
	MenuModalCloseButton,
	MenuModalFooter,
} from '../../../';
import { useExportMutation } from '@/components/library/store/services/commonApi';

const ExportModal = ({ path }: { path: string }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { fields = [], preferences = [] } = useAppSelector(state => state.table);
	const [selected, setSelected] = useState<string[]>([]);

	const [trigger, result] = useExportMutation();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		trigger({
			path: path,
			body: selected,
			type: 'csv',
		});
	};

	const close = () => {
		setSelected(preferences);
		onClose();
	};

	useEffect(() => {
		setSelected(preferences);
	}, [preferences]);

	useEffect(() => {
		if (result?.isSuccess) {
			close();
		}
	}, [result]);

	const handleCheckboxChange = React.useCallback((e: any, field: any) => {
		if (e.target.checked) {
			setSelected(prevSelected => [...prevSelected, field]);
		} else {
			setSelected(prevSelected => prevSelected.filter(item => item !== field));
		}
	}, []);

	const formatFieldName = (field: string): string => {
		return field
			.split('.')
			.map(
				part =>
					part
						.replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters
						.replace(/^./, str => str.toUpperCase()) // Capitalize the first letter
			)
			.join(' ');
	};

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
				colorScheme='gray'>
				Export
			</Button>

			<MenuModal
				isOpen={isOpen}
				onClose={close}>
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
				</MenuModalBody>
				<MenuModalFooter>
					{selected?.length < 2 ? (
						<Text color='red'>Please select at least 2 fields</Text>
					) : (
						<>
							<Button
								size='xs'
								colorScheme='gray'
								mr={2}
								onClick={close}>
								Discard
							</Button>
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
