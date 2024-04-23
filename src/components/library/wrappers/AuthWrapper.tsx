'use client';
import { useAppDispatch } from '@/hooks';
import { useAuth } from '@/hooks/useAuth';
import { clearFilters } from '@/store/slices/tableSlice';
import { FlexPropsType } from '@/types';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect } from 'react';

const AuthWrapper: FC<FlexPropsType> = ({ children }) => {
	const { isLoading, isLoggedIn } = useAuth();
	const dispatch = useAppDispatch();

	const router = useRouter();

	useEffect(() => {
		if (!isLoading && !isLoggedIn) {
			router.replace('/auth/login');
		}
		dispatch(clearFilters());
	}, [isLoading]);

	if (isLoading) return null;
	if (isLoggedIn) return children;
	return null;
};

export default AuthWrapper;
