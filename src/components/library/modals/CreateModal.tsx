import React, { FormEvent } from 'react';
import {
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react';

import {
	useGetByIdQuery,
	usePostMutation,
	useUpdateByIdMutation,
} from '@/store/services/commonApi';
import { useEffect, useState } from 'react';

import {
	FormItem,
	FormInput,
	ModalFormSection,
	FormDivision,
	useCustomToast,
	ModalContainer,
	useFormData,
	InputData,
	ModalHeader,
	ModalFooter,
	getFieldValue,
} from '../';

type CreateModalProps = {
	data: InputData<any>[];
	trigger: any;
	path: string;
	type?: 'post' | 'update';
	id?: string;
};

const CreateModal = ({ data, trigger, path, type, id }: CreateModalProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const { data: prevData, isFetching, refetch } = useGetByIdQuery({ path, id }, { skip: !id });

	const onModalOpen = () => {
		onOpen();
		if (type == 'update') {
			refetch();
		}
	};

	const [formData, setFormData] = useFormData<any>(data, prevData);

	const [callApi, result] = usePostMutation();
	const [updateApi, updateResult] = useUpdateByIdMutation();

	const { isSuccess, isLoading, isError, error } = type === 'update' ? updateResult : result;

	const [changedData, setChangedData] = useState({});

	const sections = React.useMemo(() => {
		let section: any[] = [];
		let sections: any[][] = [];

		data.forEach((field: any, i: number) => {
			section.push(field);

			if (field.endOfSection || i === data.length - 1) {
				sections.push(section);
				section = [];
			}
		});

		return sections;
	}, [data]);

	useCustomToast({
		successText: type == 'update' ? 'Information Updated Successfully' : 'Item added successfully',
		isSuccess,
		isError,
		isLoading: isLoading,
		error: error,
	});

	const handleChange = (e: any) => {
		if (e.target.name.includes('.')) {
			const [parent, child] = e.target.name.split('.');
			setFormData((prevState: any) => ({
				...prevState,
				[parent]: {
					...prevState[parent],
					[child]: e.target.value,
				},
			}));
			setChangedData((prevState: any) => ({
				...prevState,
				[parent]: {
					...formData[parent],
					[child]: e.target.value,
				},
			}));
		} else {
			setFormData({ ...formData, [e.target.name]: e.target.value });
			setChangedData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
		}
	};

	const handleSwitch = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.checked });
		setChangedData(prevState => ({ ...prevState, [e.target.name]: e.target.checked }));
	};

	const handleImage = (e: any) => {
		setChangedData(prevState => ({ ...prevState, image: e }));
		setFormData({ ...formData, image: e });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (type === 'update') {
			updateApi({ path, id: id || 'id', body: changedData });
		} else {
			callApi({ path, body: formData });
		}
	};

	const getOnChangeHandler = (type: string) => {
		switch (type) {
			case 'image':
				return handleImage;
			case 'switch':
				return handleSwitch;
			case 'checkbox':
				return handleSwitch;
			default:
				return handleChange;
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
			<Flex onClick={onModalOpen}>{trigger || path}</Flex>

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
								{sections.map((section: any, i: number) => (
									<FormDivision
										key={i}
										borderWidth={1}
										boxShadow='none'
										bg='menu.light'
										_dark={{ bg: 'menu.dark' }}>
										{section?.map((item: any, i: number) => (
											<FormItem
												item={item}
												key={i}>
												{(!item?.renderCondition || item?.renderCondition(formData)) && (
													<FormInput
														isRequired={item?.isRequired || false}
														name={item?.name}
														label={item?.label}
														type={item?.type}
														value={getFieldValue({ name: item?.name, formData })}
														onChange={getOnChangeHandler(item?.type)}
														model={item?.model}
														placeholder={item?.placeholder}
														options={item?.options}
													/>
												)}
											</FormItem>
										))}
									</FormDivision>
								))}
							</ModalFormSection>
						</ModalBody>
						<ModalFooter>
							<Button
								mr={2}
								size='xs'
								onClick={onModalClose}
								colorScheme='gray'>
								Discard
							</Button>
							<Button
								size='xs'
								type='submit'
								isLoading={isLoading}>
								Confirm
							</Button>
						</ModalFooter>
					</form>
				</ModalContainer>
			</Modal>
		</>
	);
};

export default CreateModal;
