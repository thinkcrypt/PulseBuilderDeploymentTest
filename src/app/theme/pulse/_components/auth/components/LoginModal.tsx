'use client';
import { FC, useEffect } from 'react';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import {
	EditorLayoutSuspense,
	useAppDispatch,
	resetBuilder,
	push,
} from '@/components/library';
import { homeSidebarData } from '../../index';
import LoginUi from './LoginUi';
import authModalCssSchema from './authSchema';

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
			gap={0}
		>
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
