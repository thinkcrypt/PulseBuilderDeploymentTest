'use client';
import { Box, BoxProps, TextProps } from '@chakra-ui/react';
import { useState, useRef, ReactNode, FC, useEffect } from 'react';
// import NormalText from '@/components/text/NormalText';
// import { PADDING_X } from '@/components/library/config/lib/constants/constants';
import { HoverContentContainer } from '@/components/library';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import { EditorLayoutSuspense, useAppDispatch, resetBuilder, push } from '@/components/library';
import { homeSidebarData } from '../../_components/sidebarData/sidebarData';
import LoginUi from './LoginUi';
import authModalCssSchema from './authSchema';
// import LoginUi from "./LoginUi";
// import authModalCssSchema from "./authSchema";

type LoginModalProps = {
	//   children: any;
	basic: any;
	content: any;
};

const LoginModal: FC<LoginModalProps> = ({ basic, content }) => {
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
	return (
		<EditorLayoutSuspense
			data={data}
			sidebarData={homeSidebarData}
			isLoading={isLoading || !data}
			path='/home-content'
			title='Home Content'
			position='relative'
			gap={0}>
			<LoginUi
				data={data}
				path='pulse'
				content={content || data?.content}
				basic={basic || data?.basic}
				dataModel={authModalCssSchema}
			/>
		</EditorLayoutSuspense>
	);
};

export default LoginModal;
