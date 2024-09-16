import React, { FC } from 'react';
import { Center, Spinner } from '@chakra-ui/react';
import { Layout } from '../../..';

type LayoutSpinnerProps = {
	isLoading: boolean;
	children: React.ReactNode;
	path: string;
	title: string;
	isError?: boolean;
	errorMessage?: string;
	data?: any;
};

const LayoutSuspense: FC<LayoutSpinnerProps> = ({
	children,
	path,
	title,
	isLoading,
	isError,
	errorMessage,
	data,
}) => {
	if (isLoading)
		return (
			<Layout
				path={path}
				title={title}>
				<Center
					h='100vh'
					w='100%'>
					<Spinner />
				</Center>
			</Layout>
		);
	else
		return (
			<Layout
				path={path}
				title={title}>
				{children}
			</Layout>
		);
};

export default LayoutSuspense;
