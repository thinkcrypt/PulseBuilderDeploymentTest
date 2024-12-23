import React, { FC, Fragment, ReactNode } from 'react';
import {
	Flex,
	Heading,
	Button,
	ButtonProps,
	useColorModeValue,
	Grid,
	FlexProps,
} from '@chakra-ui/react';
import { Icon, padding, radius, shadow } from '../../';

const P = { base: padding.CONTAINER.BASE, md: padding.CONTAINER.MD, lg: padding.CONTAINER.LG };

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

const headingContainerProps: FlexProps = {
	pt: P,
	px: P,
	w: '100%',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: 2,
};

const headingProps = {
	fontWeight: '600',
	fontSize: { base: '1.15rem', md: '1.25rem' },
};

const containerProps: FlexProps = {
	w: 'full',
	flexDirection: 'column',
	bg: 'container.newLight',
	borderColor: 'container.borderLight',
	shadow: shadow.DASH,
	_dark: {
		bg: 'container.newDark',
		borderColor: 'container.borderDark',
	},
	borderRadius: radius.CONTAINER,
	borderWidth: 1,
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

	const bodyProps = {
		px: P,
		pt: 6,
		pb: 2,
		row: 2,
		rowGap: 2,
		gridTemplateColumns: { base: '1fr', md: cols || '1fr' },
	};

	return (
		<Flex {...containerProps}>
			{heading && (
				<Flex {...headingContainerProps}>
					<Heading {...headingProps}>{heading}</Heading>
				</Flex>
			)}
			<form
				onSubmit={handleSubmit}
				style={{ width: '100%' }}>
				<Grid {...bodyProps}>{children}</Grid>
				<Footer>
					<Fragment>{editState}</Fragment>
				</Footer>
			</form>
		</Flex>
	);
};

const footerProps: FlexProps = {
	px: P,
	borderTopWidth: 1,
	h: '52px',
	_light: { bg: 'background.light', borderColor: 'container.borderLight' },
	w: '100%',
	alignItems: 'center',
	gap: 2,
	borderBottomRadius: radius.CONTAINER,
	justifyContent: 'flex-end',
};

const Footer = ({ children, ...props }: FlexProps & { children: React.ReactNode }) => {
	return (
		<Flex
			{...footerProps}
			{...props}>
			{children}
		</Flex>
	);
};

const EditButtons: FC<ButtonProps & { closeEdit: () => void }> = ({ closeEdit, ...props }) => (
	<Flex align='center'>
		<Button
			mr={2}
			size='sm'
			variant='white'
			onClick={closeEdit}>
			Discard
		</Button>
		<Button
			size='sm'
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
			size='sm'
			pl={3}
			leftIcon={
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
