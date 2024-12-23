'use client';
import {
	VInput,
	useCustomToast,
	NotLoggedIn,
	useAppDispatch,
	AuthForm,
	login,
} from '@/components/library';
import { useLgoinMutation } from '@/store/services/authApi';
import { useSearchParams } from 'next/navigation';
import React, { FC, ChangeEvent, useState, useEffect } from 'react';

type FormDataType = {
	email: string;
	password: string;
	lead?: string;
	from?: string;
};

const LoginPage: FC<{}> = () => {
	const searchParams = useSearchParams();
	const lead = searchParams.get('lead');
	const from = searchParams.get('from');

	const [formData, setFormData] = useState<FormDataType>({
		email: 'john.doe@example.com',
		password: 'password123',
	});

	const [trigger, result] = useLgoinMutation();
	const dispatch = useAppDispatch();

	const { isSuccess, isError, isLoading, error } = result;
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		trigger({ ...formData, lead, from });
	};

	useEffect(() => {
		if (result.isSuccess) {
			dispatch(login(result.data));
		}
	}, [isLoading]);

	useCustomToast({
		isError,
		isLoading: isLoading,
		error: error,
	});

	return (
		<NotLoggedIn>
			<AuthForm
				title='Login [DEMO]'
				isLoading={isLoading}
				handleSubmit={handleSubmit}>
				<VInput
					label='Email'
					isRequired
					isReadOnly
					value={formData.email}
					onChange={handleChange}
					name='email'
				/>
				<VInput
					label='Password'
					isRequired
					isReadOnly
					value={formData.password}
					onChange={handleChange}
					name='password'
					type='password'
				/>
			</AuthForm>
		</NotLoggedIn>
	);
};

export default LoginPage;
