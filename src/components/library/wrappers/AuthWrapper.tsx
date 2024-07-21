'use client';
import { clearFilters } from '@/store/slices/tableSlice';
import { FlexProps } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';

import { useAppDispatch, useAuth } from '../';

export type FlexPropsType = FlexProps & {
	children?: React.ReactNode;
};

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
