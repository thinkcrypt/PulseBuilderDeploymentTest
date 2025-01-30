'use client';

import { useState, useRef, ReactNode, FC, useEffect } from 'react';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import {
	EditorLayoutSuspense,
	useAppDispatch,
	resetBuilder,
	push,
} from '@/components/library';
import LoginModal from './_components/LoginModal';

const AuthPage = () => {
	const { data, isLoading, isSuccess, isFetching } = useGetContentQuery({
		path: 'pulse',
	});
	// console.log('login', data);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(resetBuilder());
	}, []);

	useEffect(() => {
		if (data && !isFetching && isSuccess) {
			dispatch(
				push({
					basic: data?.basic,
					content: data?.content,
				})
			);
		}
	}, [isFetching]);
	return <LoginModal basic={data?.basic} content={data?.content} />;
};

export default AuthPage;
