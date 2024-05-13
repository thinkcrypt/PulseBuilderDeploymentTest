import React from 'react';
import { Button, Flex, Heading } from '@chakra-ui/react';
import Icon from '../../icon/Icon';
import Column from '../../containers/Column';

const HeadingMenu = ({
	editing,
	close,
	open,
	isLoading,
	title,
	children,
}: {
	editing: boolean;
	close: any;
	open: any;
	isLoading: boolean;
	title: string;
	children: any;
}) => {
	return (
		<Column>
			<Flex
				justify='space-between'
				borderBottomWidth={1}
				align='center'
				py={5}>
				<Heading size='md'>{title}</Heading>
				{editing ? (
					<Flex align='center'>
						<Button
							mr={2}
							size='xs'
							colorScheme='gray'
							onClick={close}>
							Discard
						</Button>
						<Button
							size='xs'
							isLoading={isLoading}
							type='submit'>
							Confirm
						</Button>
					</Flex>
				) : (
					<Button
						size='xs'
						rightIcon={<Icon name='edit' />}
						onClick={open}>
						Edit
					</Button>
				)}
			</Flex>
			<Column
				py={8}
				gap={1}>
				{children}
			</Column>
		</Column>
	);
};

export default HeadingMenu;
