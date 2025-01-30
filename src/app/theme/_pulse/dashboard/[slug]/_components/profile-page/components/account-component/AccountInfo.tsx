'use client';
// import { FormControlComp } from '@/components/login-modal/components';
import { Box, BoxProps, Grid, Spinner } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import AccountHeader from './AccountHeader';
import {
	useUpdatePasswordMutation,
	useUpdateSelfMutation,
} from '@/store/services/authApi';
import { useCustomToast } from '@/components/library';
// import useCustomToast from '@/library/hooks/useCustomToast';
import FormControlComp from '../../../../../../auth/_components/FormControlComp';
type AccountInfoProps = BoxProps & {
	basic: any;
	css?: any;
	selfData: any;
	content?: any;
	isLoading?: boolean;
};

const AccountInfo: FC<AccountInfoProps> = ({
	basic,
	css,
	content,
	selfData,
	isLoading,
}) => {
	const [updatePasswordTrigger, updatePasswordResult] =
		useUpdatePasswordMutation();
	const [updateSelfTrigger, updateSelfResult] = useUpdateSelfMutation();
	const [isEditAccount, setIsEditAccount] = useState(false);
	const [isEditPassword, setIsEditPassword] = useState(false);

	const [formData, setFormData] = useState({
		fullName: '',
		phone: '',
		email: '',
		// gender: '',
	});

	const [securityData, setSecurityData] = useState({
		oldPassword: '',
		password: '',
		confirm: '',
	});

	const BORDER = `1px solid ${css?.borderColor || '#e7e7e7'}`;

	const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handlePasswordData = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSecurityData(prev => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		if (selfData) {
			setFormData(prev => ({
				...prev,
				fullName: selfData.name ?? prev.fullName, // Preserve previous value if undefined
				email: selfData.email ?? prev.email,
				phone: selfData.phone ?? prev.phone,
				// gender: selfData.gender ?? prev.gender,
			}));
		}
	}, [selfData]);

	const handleAccountEdit = (value: boolean) => {
		setIsEditAccount(value);
	};

	const handlePasswordEdit = (value: boolean) => {
		setIsEditPassword(value);
	};

	const handleUpdateAccount = () => {
		const body = {
			name: formData?.fullName,
			phone: formData?.phone,
			email: formData?.email,
		};
		updateSelfTrigger(body);
	};

	const handleUpdatePassword = () => {
		const body = {
			oldPassword: securityData?.oldPassword,
			password: securityData?.password,
			confirm: securityData?.confirm,
		};
		updatePasswordTrigger(body);
	};

	const {
		data: selfDataSuccess,
		error: selfError,
		isError: selfIsError,
		isLoading: selfLoading,
		isSuccess: selfSuccess,
	} = updateSelfResult;
	useCustomToast({
		isError: selfIsError,
		isSuccess: selfSuccess,
		error: selfError,
		isLoading: selfLoading,
		successText: 'Account Update Successfull',
		successTitle: 'Success',
	});

	const {
		data: passwordDataSuccess,
		error: passwordError,
		isError: passwordIsError,
		isLoading: passwordLoading,
		isSuccess: passwordSuccess,
	} = updatePasswordResult;
	useCustomToast({
		isError: passwordIsError,
		isSuccess: passwordSuccess,
		error: passwordError,
		isLoading: passwordLoading,
		successText: 'Account Update Successfull',
		successTitle: 'Success',
	});

	console.log('SelfData', selfData);

	return (
		<Box>
			<Box border={BORDER} px='1rem' py='1rem' mb='1rem'>
				<AccountHeader
					isEdit={isEditAccount}
					handleEdit={handleAccountEdit}
					handleSubmit={handleUpdateAccount}
					isLoading={selfLoading}
					title='Account Details'
					basic={basic}
					css={css}
				/>
				<Grid gridTemplateColumns={'1fr 1fr'} gap={4} mt='1rem'>
					<FormControlComp
						label='Full Name'
						placeholder='Full Name'
						type={'text'}
						css={css}
						value={formData?.fullName}
						name={'fullName'}
						onChange={handleFormData}
						isDisabled={!isEditAccount}
					/>
					<FormControlComp
						label='Phone Number'
						placeholder='Phone Number'
						type={'text'}
						css={css}
						value={formData.phone}
						name={'phone'}
						onChange={handleFormData}
						isDisabled={!isEditAccount}
					/>
					<FormControlComp
						label='Email'
						placeholder='Email'
						type={'text'}
						css={css}
						value={formData.email}
						name={'email'}
						onChange={handleFormData}
						isDisabled={!isEditAccount}
					/>

					{/* <FormControlComp
						label='Full Name'
						placeholder='Full Name'
						type={'text'}
						css={css}
						value={formData.fullName}
						name={'fullName'}
						onChange={handleFormData}
					/> */}
				</Grid>
			</Box>
			<Box border={BORDER} px='1rem' py='1rem'>
				<AccountHeader
					isEdit={isEditPassword}
					handleEdit={handlePasswordEdit}
					handleSubmit={handleUpdatePassword}
					isLoading={passwordLoading}
					title='Security'
					basic={basic}
					css={css}
				/>
				<Grid gridTemplateColumns={'1fr 1fr'} gap={4} mt='1rem'>
					<FormControlComp
						label='Current Password'
						placeholder='Current Password'
						type={'password'}
						css={css}
						value={securityData.oldPassword}
						name={'oldPassword'}
						onChange={handlePasswordData}
						isDisabled={!isEditPassword}
					/>
					<FormControlComp
						label='New Password'
						placeholder='New Password'
						type={'password'}
						css={css}
						value={securityData.password}
						name={'password'}
						onChange={handlePasswordData}
						isDisabled={!isEditPassword}
					/>
					<FormControlComp
						label='Confirm Password'
						placeholder='Confirm Password'
						type={'password'}
						css={css}
						value={securityData.confirm}
						name={'confirm'}
						onChange={handlePasswordData}
						isDisabled={!isEditPassword}
					/>
				</Grid>
			</Box>
		</Box>
	);
};

export default AccountInfo;
