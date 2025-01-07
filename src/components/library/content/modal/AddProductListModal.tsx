import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalOverlay,
	Select,
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
	FormMain,
	DiscardButton,
	ModalSubmitButton,
} from '../..';
import {
	useAddHomeCategoryMutation,
	useUpdateContentMutation,
} from '../../store/services/contentApi';

type CreateModalProps = {
	dataModel: InputData<any>[];
	children?: React.ReactNode;
	path?: string;
	id?: string;
	title?: string;
	data?: any;
	key?: any;
	hasProductlistKey?: any;
	productListKeys?: any;
	setProductListKeys?: any;
};

const AddProductListModal = ({
	data = [],
	dataModel,
	children,
	path = 'nexa',
	title,
	hasProductlistKey,
	key,
}: CreateModalProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [formData, setFormData] = useFormData<any>(dataModel);
	// product list keys
	const [productListKeys, setProductListKeys] = useState<string>('');
	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setProductListKeys(event.target.value);
	};

	const [trigger, result] = useAddHomeCategoryMutation();

	const onModalOpen = () => {
		setFormData(data);
		onOpen();
	};

	const { isSuccess, isLoading, isError, error } = result;

	const [changedData, setChangedData] = useState({});

	useCustomToast({
		successText: 'Contnt Updated',
		isSuccess,
		isError,
		isLoading,
		error,
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();
		trigger({
			body: { ...formData, key: productListKeys },
			path: path,
		});
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

	return (
		<>
			<Flex onClick={onModalOpen}>{children || title || path}</Flex>

			<Modal
				size='2xl'
				isOpen={isOpen}
				onClose={onModalClose}
				closeOnOverlayClick={false}
			>
				<ModalOverlay />
				<ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
					<ModalHeader>{`Update ${title}`}</ModalHeader>
					<ModalCloseButton />
					<form onSubmit={handleSubmit}>
						<ModalBody px={6}>
							<ModalFormSection>
								<FormMain
									fields={dataModel}
									formData={formData}
									setFormData={setFormData}
									setChangedData={setChangedData}
									isModal={true}
									hasProductlistKey={hasProductlistKey ? true : false}
									productListKeys={productListKeys}
									handleChangeProductList={handleChange}
								/>
							</ModalFormSection>
						</ModalBody>
						<ModalFooter>
							<DiscardButton mr={2} onClick={onModalClose}>
								Discard
							</DiscardButton>
							<ModalSubmitButton isLoading={isLoading}>
								Confirm
							</ModalSubmitButton>
						</ModalFooter>
					</form>
				</ModalContainer>
			</Modal>
		</>
	);
};

export default AddProductListModal;
