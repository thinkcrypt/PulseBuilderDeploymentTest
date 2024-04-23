import { useAppSelector } from '@/hooks';
import { useUpdatePreferencesMutation } from '@/store/services/authApi';
import {
	Button,
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Text,
	Checkbox,
	Grid,
	ModalFooter,
	IconButton,
} from '@chakra-ui/react';
import React, { useEffect, useState, useCallback } from 'react';
import Icon from '../icon/Icon';
import ModalContainer from '@/components/library/menu/ModalContainer';

const Preferences = ({ path }: { path: string }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { fields = [], preferences = [] } = useAppSelector(state => state.table);
	const [selected, setSelected] = useState<string[]>([]);

	const [trigger, result] = useUpdatePreferencesMutation();

	const handleSubmit = useCallback(
		(e: any) => {
			e.preventDefault();
			trigger({
				field: path,
				preferences: selected,
			});
		},
		[path, selected, trigger]
	);

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

	const checkboxes = React.useMemo(
		() =>
			fields.map((field: string, i: number) => (
				<Checkbox
					fontWeight='600'
					colorScheme='brand'
					key={i}
					isChecked={selected?.includes(field)}
					onChange={e => handleCheckboxChange(e, field)}>
					{field}
				</Checkbox>
			)),
		[fields, selected, handleCheckboxChange]
	);

	return (
		<>
			{/* <Tooltip placement='bottom' label='Select Table Fields' borderRadius='md'>
				<span> */}
			<IconButton
				size='sm'
				aria-label='fields'
				onClick={onOpen}
				colorScheme='gray'
				icon={<Icon name='fields' />}
			/>
			{/* </span>
			</Tooltip> */}

			<Modal isOpen={isOpen} onClose={close}>
				<ModalOverlay />
				<ModalContainer>
					<ModalHeader>Select Preferences</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Grid gridTemplateColumns={'1fr 1fr 1fr'} gap={3} rowGap={4}>
							{checkboxes}
						</Grid>
					</ModalBody>
					<ModalFooter>
						{selected?.length < 2 ? (
							<Text color='red'>Please select at least 2 fields</Text>
						) : (
							<>
								<Button size='xs' colorScheme='gray' mr={2} onClick={close}>
									Discard
								</Button>
								<Button size='xs' onClick={handleSubmit} isLoading={result?.isLoading}>
									Apply
								</Button>
							</>
						)}
					</ModalFooter>
				</ModalContainer>
			</Modal>
		</>
	);
};

export default Preferences;
