import React, { FC, ReactNode } from 'react';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { Align, Column, EditContentModal } from '../..';

type ViewContentContainerType = {
	children: ReactNode;
	title?: string;
	dataModel: any;
	data: any;
	edit?: boolean;
	path: string;
};

const ViewProductContainer: FC<ViewContentContainerType> = ({
	title,
	children,
	dataModel,
	data,
	path,
	edit = true,
}) => {
	return (
		<Column gap={4}>
			<Align
				py={4}
				flex={1}
				justify='space-between'>
				<Heading size='lg'>{title || '--'}</Heading>
				{edit && (
					<EditContentModal
						data={data}
						path={path}
						dataModel={dataModel}>
						<Button
							colorScheme='gray'
							size='sm'>
							Edit
						</Button>
					</EditContentModal>
				)}
			</Align>
			<Column gap={6}>{children}</Column>
		</Column>
	);
};
export default ViewProductContainer;
