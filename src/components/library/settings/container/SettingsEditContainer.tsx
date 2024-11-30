import React, { FC, Fragment, ReactNode } from 'react';
import { Flex, Heading, Button, ButtonProps, useColorModeValue, Grid } from '@chakra-ui/react';
import { Icon, SpaceBetween } from '../../';

type SettingsEditContainerProps = {
	editing: boolean;
	openEdit: () => void;
	closeEdit: () => void;
	handleSubmit: (e: any) => void;
	isLoading: boolean;
	children: React.ReactNode;
	heading: string;
	cols?: string;
};

const SettingsEditContainer: FC<SettingsEditContainerProps> = ({
	editing,
	openEdit,
	closeEdit,
	handleSubmit,
	isLoading,
	children,
	heading,
	cols,
}) => {
	const editState = editing ? (
		<EditButtons
			isLoading={isLoading}
			closeEdit={closeEdit}
		/>
	) : (
		<ToEditButton onClick={openEdit}>Edit</ToEditButton>
	);

	return (
		<form onSubmit={handleSubmit}>
			<SpaceBetween
				borderBottomWidth={1}
				py={5}>
				<Heading size='md'>{heading}</Heading>
				<Fragment>{editState}</Fragment>
			</SpaceBetween>
			<Grid
				row={2}
				gridTemplateColumns={{ base: '1fr', md: cols || '1fr' }}
				py={6}>
				{children}
			</Grid>
		</form>
	);
};

const EditButtons: FC<ButtonProps & { closeEdit: () => void }> = ({ closeEdit, ...props }) => (
	<Flex align='center'>
		<Button
			mr={2}
			size='xs'
			colorScheme='gray'
			onClick={closeEdit}>
			Discard
		</Button>
		<Button
			size='xs'
			type='submit'
			{...props}>
			Confirm
		</Button>
	</Flex>
);

const ToEditButton: FC<ButtonProps & { children: ReactNode }> = ({ children, ...props }) => {
	const iconColor = useColorModeValue('white', '#222');
	return (
		<Button
			size='xs'
			rightIcon={
				<Icon
					name='edit'
					color={iconColor}
				/>
			}
			{...props}>
			{children}
		</Button>
	);
};

export default SettingsEditContainer;
