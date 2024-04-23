'use client';
import { useAuth } from '@/hooks/useAuth';
import { FlexPropsType } from '@/types';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect } from 'react';

const NotLoggedIn: FC<FlexPropsType> = ({ children }) => {
	const { isLoading, isLoggedIn } = useAuth();

	const router = useRouter();

	useEffect(() => {
		if (!isLoading && isLoggedIn) {
			router.replace('/');
		}
	}, [isLoading]);

	if (isLoading) return null;
	if (!isLoggedIn) return children;
	return null;
};

export default NotLoggedIn;
