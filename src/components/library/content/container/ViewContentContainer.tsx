import React, { FC, ReactNode } from 'react';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { Align, Column, EditContentModal } from '../..';

type ViewContentContainerType = {
	children: ReactNode;
	title?: string;
	dataModel: any;
	data: any;
	edit?: boolean;
	path?: string;
};

const ViewContentContainer: FC<ViewContentContainerType> = ({
	title,
	children,
	dataModel,
	data,
	edit = true,
	path,
}) => {
	return (
		<Column
			border='1px dashed'
			borderRadius='12px'
			gap={4}>
			<Align
				p={6}
				py={2}
				flex={1}
				borderBottom='1px dashed'
				justify='space-between'>
				<Heading size='sm'>{title || '--'}</Heading>
				{edit && (
					<EditContentModal
						path={path}
						data={data}
						dataModel={dataModel}>
						<Button
							colorScheme='gray'
							size='sm'>
							Edit
						</Button>
					</EditContentModal>
				)}
			</Align>
			<Column
				gap={4}
				p={6}
				py={4}>
				{children}
			</Column>
		</Column>
	);
};
export default ViewContentContainer;
