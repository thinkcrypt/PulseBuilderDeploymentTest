'use client';
import Attendance from '@/components/attendance/Attendance';
import ColorMode from '@/components/color-mode/ColorMode';
import useCustomToast from '@/components/library/hooks/useCustomToast';
import VInput from '@/components/library/utils/inputs/VInput';
import { useStartSessionMutation } from '@/store/services/mainApi';
import React, { useState } from 'react';

const StartPage = () => {
	const [trigger, result] = useStartSessionMutation();
	const [data, setData] = useState<any>({
		email: undefined,
		password: undefined,
		phone: undefined,
	});

	const handleChange = (e: any) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		trigger(data);
	};

	const { isSuccess, isError, isLoading, error } = result;

	useCustomToast({
		successText: 'Attendance recorded',
		isSuccess,
		isError,
		isLoading: isLoading,
		error: error,
	});

	return (
		<Attendance
			title='Login'
			isLoading={isLoading}
			handleSubmit={handleSubmit}>
			<VInput
				label='email'
				value={data.email}
				onChange={handleChange}
				name='email'
				isRequired={true}
			/>
			<VInput
				label='password'
				value={data.password}
				onChange={handleChange}
				name='password'
				isRequired={true}
				type='password'
			/>
			<ColorMode />
		</Attendance>
	);
};

export default StartPage;
