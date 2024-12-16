import React, { FC, Fragment, ReactNode } from 'react';
import { Flex, Heading, Button, ButtonProps, useColorModeValue, Grid } from '@chakra-ui/react';
import { Icon, SpaceBetween, padding, radius } from '../../';

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

	const P = { base: padding.CONTAINER.BASE, md: padding.CONTAINER.MD, lg: padding.CONTAINER.LG };

	return (
		<Flex
			py={P}
			bg='container.newLight'
			w='full'
			borderColor='container.borderLight'
			_dark={{
				bg: 'container.newDark',
				borderColor: 'container.borderDark',
			}}
			borderRadius={radius.CONTAINER}
			borderWidth={1}>
			<form
				onSubmit={handleSubmit}
				style={{ width: '100%' }}>
				<SpaceBetween
					borderBottomWidth={1}
					borderColor='container.borderLight'
					_dark={{
						borderColor: 'container.borderDark',
					}}
					pb={4}
					px={P}>
					<Heading
						fontWeight='700'
						fontSize='1.25rem'>
						{heading}
					</Heading>
					<Fragment>{editState}</Fragment>
				</SpaceBetween>
				<Grid
					px={P}
					pt={6}
					row={2}
					gridTemplateColumns={{ base: '1fr', md: cols || '1fr' }}>
					{children}
				</Grid>
			</form>
		</Flex>
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
