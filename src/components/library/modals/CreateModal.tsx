import React, { FormEvent, useEffect, useState } from 'react';
import {
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';

import {
	ModalFormSection,
	useCustomToast,
	ModalContainer,
	useFormData,
	InputData,
	ModalHeader,
	ModalFooter,
	usePostMutation,
	useUpdateByIdMutation,
	FormMain,
	useLazyGetByIdToEditQuery,
	DiscardButton,
	ModalSubmitButton,
} from '../';

type CreateModalProps = {
	data: InputData<any>[];
	trigger: any;
	path: string;
	type?: 'post' | 'update';
	id?: string;
	title?: string;
};

const CreateModal = ({ data, trigger, path, title, type, id }: CreateModalProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [fetch, { data: prevData, isFetching, isUninitialized }] = useLazyGetByIdToEditQuery();

	const [formData, setFormData] = useFormData<any>(data, prevData);

	const [callApi, result] = usePostMutation();
	const [updateApi, updateResult] = useUpdateByIdMutation();

	const onModalOpen = () => {
		onOpen();
		if (type == 'update') {
			fetch({ path, id });
		}
	};

	const { isSuccess, isLoading, isError, error } = type === 'update' ? updateResult : result;

	const [changedData, setChangedData] = useState({});

	const successText =
		type == 'update' ? 'Information Updated Successfully' : 'Item added successfully';

	useCustomToast({
		successText,
		isSuccess,
		isError,
		isLoading,
		error,
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (type === 'update') {
			updateApi({ path, id: id || 'id', body: changedData });
		} else {
			callApi({ path, body: formData });
		}
	};

	const onModalClose = () => {
		setFormData({});
		result.reset();
		onClose();
	};

	useEffect(() => {
		if (isSuccess && !isLoading) {
			onModalClose();
		}
	}, [isLoading]);

	useEffect(() => {
		if (prevData) {
			setFormData(prevData);
		}
	}, [prevData, isFetching]);

	return (
		<>
			<Flex onClick={onModalOpen}>{trigger || title || path}</Flex>

			<Modal
				size='2xl'
				isOpen={isOpen}
				onClose={onModalClose}
				closeOnOverlayClick={false}>
				<ModalOverlay />
				<ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
					<ModalHeader>{`${type === 'update' ? 'Update' : 'Create'} ${path}`}</ModalHeader>
					<ModalCloseButton />
					<form onSubmit={handleSubmit}>
						<ModalBody px={6}>
							<ModalFormSection>
								<FormMain
									fields={data}
									formData={formData}
									setFormData={setFormData}
									setChangedData={setChangedData}
									isModal={true}
								/>
							</ModalFormSection>
						</ModalBody>
						<ModalFooter>
							<DiscardButton
								mr={2}
								onClick={onModalClose}>
								Discard
							</DiscardButton>
							<ModalSubmitButton isLoading={isLoading}>Confirm</ModalSubmitButton>
						</ModalFooter>
					</form>
				</ModalContainer>
			</Modal>
		</>
	);
};

export default CreateModal;
