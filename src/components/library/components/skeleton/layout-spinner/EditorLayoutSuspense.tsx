import React, { FC } from 'react';
import { Center, Spinner, FlexProps, Flex } from '@chakra-ui/react';
import { EditorLayout, Layout } from '../../..';

type LayoutSpinnerProps = FlexProps & {
	isLoading: boolean;
	children: React.ReactNode;
	path: string;
	title: string;
	isError?: boolean;
	errorMessage?: string;
	data?: any;
	sidebarData?: any;
};

const EditorLayoutSuspense: FC<LayoutSpinnerProps> = ({
	children,
	path,
	title,
	isLoading,
	isError,
	errorMessage,
	data,
	sidebarData,
	...props
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
			<EditorLayout
				sidebarData={sidebarData}
				path={path}
				data={data}
				title={title}>
				<Flex
					flexDir='column'
					{...props}>
					{children}
				</Flex>
			</EditorLayout>
		);
};

export default EditorLayoutSuspense;
