import { useAppSelector } from '@/hooks';
import { useUpdatePreferencesMutation } from '@/store/services/authApi';
import { Button, useDisclosure, Text, Checkbox, Grid, IconButton } from '@chakra-ui/react';
import React, { useEffect, useState, useCallback } from 'react';
import Icon from '../icon/Icon';
import useIsMobile from '../hooks/useIsMobile';
import MenuModal from './table-components/menu-modals/MenuModal';
import MenuModalOverlay from './table-components/menu-modals/MenuModalOverlay';
import MenuModalContent from './table-components/menu-modals/MenuModalContent';
import MenuModalHeader from './table-components/menu-modals/MenuModalHeader';
import MenuModalBody from './table-components/menu-modals/MenuModalBody';
import MenuModalCloseButton from './table-components/menu-modals/MenuModalCloseButton';
import MenuModalFooter from './table-components/menu-modals/MenuModalFooter';

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

	const checkboxes = fields.map((field: string, i: number) => (
		<Checkbox
			fontWeight='600'
			colorScheme='brand'
			key={i}
			isChecked={selected?.includes(field)}
			onChange={e => handleCheckboxChange(e, field)}>
			{field}
		</Checkbox>
	));

	const isMobile = useIsMobile();

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

			<MenuModal
				isOpen={isOpen}
				onClose={close}>
				{/* <MenuModalOverlay />
				<MenuModalContent> */}

				<MenuModalHeader>Select Preferences</MenuModalHeader>
				<MenuModalCloseButton />
				<MenuModalBody>
					<Grid
						gridTemplateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr' }}
						gap={3}
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
								Apply
							</Button>
						</>
					)}
				</MenuModalFooter>
				{/* </MenuModalContent> */}
			</MenuModal>
		</>
	);
};

export default Preferences;
