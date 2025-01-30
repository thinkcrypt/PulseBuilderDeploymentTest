'use client';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	BoxProps,
	Box,
	Center,
} from '@chakra-ui/react';
import { useState, ReactNode, FC } from 'react';
import { AddressField, dashboardAddressFields } from './index';
import { EditButton as AddressFormButton } from '../../../../_components/index';

type Address = BoxProps & {
	children: ReactNode;
	basic: any;
	css: any;
};
export type AddressTypes = {
	name: string;
	email: string;
	phone: string;
	street: string;
	city: string;
	state: string;
	country: string;
	postalCode: number | null;
};
const Address: FC<Address> = ({ children, basic, css }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [address, setAddress] = useState<AddressTypes>({
		name: '',
		phone: '',
		email: '',
		street: '',
		city: '',
		state: '',
		country: 'Bangladesh',
		postalCode: null,
	});

	const handleInputChange = (fieldKey: string, value: string | number) => {
		setAddress(prev => ({
			...prev,
			[fieldKey]: value,
		}));
	};

	return (
		<Box>
			<Box onClick={onOpen}>{children}</Box>
			<Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg={css?.bgColor} minH='400px' maxW='800px' mx='1rem'>
					<ModalCloseButton />
					<ModalBody pt='2rem' pb='2rem'>
						<Box>
							{dashboardAddressFields.map((field, i: number) => (
								<Box key={i} mb={4}>
									<AddressField
										isRequired={field.isRequired}
										type={field.type}
										label={field.label}
										value={address[field.fieldKey as keyof AddressTypes] || ''}
										placeholder={field.placeholder}
										onChange={value => handleInputChange(field.fieldKey, value)}
										basic={basic}
										css={css}
									/>
								</Box>
							))}
							<Center mt={'2rem'} gap={4}>
								<AddressFormButton
									bg={css?.formSecondaryBtnBg || '#fff'}
									color={css?.formSecondaryBtnFg || '#F26E21'}
									fontSize='14px'
									px='32px'
									py='20px'
									basic={basic}
									_hover={{
										bg: css?.formPrimaryBtnBg || '#F26E21',
										color: css?.formPrimaryBtnFg || '#fff',
									}}
								>
									Cancel
								</AddressFormButton>
								<AddressFormButton
									bg={css?.formPrimaryBtnBg || '#F26E21'}
									color={css?.formPrimaryBtnFg || '#fff'}
									fontSize='14px'
									px='32px'
									py='20px'
									basic={basic}
									_hover={{
										bg: css?.formSecondaryBtnBg || '#fff',
										color: css?.formSecondaryBtnFg || '#F26E21',
									}}
								>
									Save this address
								</AddressFormButton>
							</Center>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default Address;
